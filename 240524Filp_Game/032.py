import matplotlib.pyplot as plt
import numpy as np
import matplotlib.colors as mcolors
from matplotlib.widgets import Button, TextBox, CheckButtons
from collections import deque
import time

class FlipGame:
    def __init__(self, N=5):
        self.N = N
        self.grid = np.zeros((N, N), dtype=bool)
        self.initial_grid = self.grid.copy()
        self.random_puzzle = None
        self.colors = [(0.5, 0.7, 1.0), (0.1, 0.1, 0.5), (0.3, 0.2, 0.7)]
        self.cmap = mcolors.LinearSegmentedColormap.from_list('custom_cmap', self.colors, N=256)
        self.num_moves = 0
        self.min_moves = float('inf')

        self.fig, self.ax = plt.subplots()
        self.fig.subplots_adjust(bottom=0.3, right=0.8)

        self.textbox_moves = TextBox(plt.axes([0.1, 0.1, 0.2, 0.05]), 'Moves:', initial=str(self.num_moves))
        self.textbox_min_moves = TextBox(plt.axes([0.6, 0.1, 0.2, 0.05]), 'Min Moves:', initial=str(self.min_moves))

        self.draw_grid()

        reset_ax = plt.axes([0.8, 0.05, 0.1, 0.075])
        self.reset_button = Button(reset_ax, 'Reset')
        self.reset_button.on_clicked(self.reset_grid)

        self.cid = self.fig.canvas.mpl_connect('button_press_event', self.on_click)

        check_ax = plt.axes([0.85, 0.25, 0.1, 0.15])
        self.check_button = CheckButtons(check_ax, ['Randomize'], [False])

        # 添加“获得答案”按钮
        answer_ax = plt.axes([0.8, 0.15, 0.1, 0.075])
        self.answer_button = Button(answer_ax, 'Get Answer')
        self.answer_button.on_clicked(self.show_answer)

    def reset_grid(self, event):
        if self.check_button.get_status()[0]:
            self.grid = self.generate_solvable_puzzle()  # 生成可解的随机谜题
            self.random_puzzle = self.grid.copy()
        else:
            if self.random_puzzle is not None:
                self.grid[:] = self.random_puzzle
            else:
                self.grid[:] = self.initial_grid

        self.num_moves = 0
        self.update_moves_text()
        self.draw_grid()
        self.cid = self.fig.canvas.mpl_connect('button_press_event', self.on_click)

    def draw_grid(self):
        self.ax.clear()
        self.ax.set_xticks([])
        self.ax.set_yticks([])
        for spine in self.ax.spines.values():
            spine.set_linewidth(2)
        for i in range(self.N):
            for j in range(self.N):
                if self.grid[i, j]:
                    color = self.calculate_color(j, i)
                    rect = plt.Rectangle([j, self.N - i - 1], 1, 1, facecolor=color, edgecolor='black', linewidth=0.5)
                    self.ax.add_patch(rect)
                else:
                    rect = plt.Rectangle([j, self.N - i - 1], 1, 1, facecolor='white', edgecolor='black', linewidth=0.5)
                    self.ax.add_patch(rect)
        self.ax.set_xlim(0, self.N)
        self.ax.set_ylim(0, self.N)
        self.ax.set_aspect('equal')
        self.fig.canvas.draw()

    def calculate_color(self, x, y):
        center_x = self.N / 2
        center_y = self.N / 2
        distance = np.sqrt((x - center_x) ** 2 + (y - center_y) ** 2)
        normalized_distance = distance / np.sqrt(center_x ** 2 + center_y ** 2)
        return self.cmap(normalized_distance)

    def update_moves_text(self):
        self.textbox_moves.set_val(str(self.num_moves))

    def update_min_moves_text(self):
        self.textbox_min_moves.set_val(str(self.min_moves))

    def on_click(self, event):
        if event.inaxes != self.ax:
            return
        x, y = int(event.xdata), int(self.N - event.ydata)
        print(f"Clicked at: ({x}, {y})")
        self.flip_tile(x, y)
        self.num_moves += 1
        self.update_moves_text()
        self.draw_grid()
        if np.all(self.grid):
            print("Congratulations! You win!")
            self.min_moves = min(self.min_moves, self.num_moves)
            self.update_min_moves_text()
            self.fig.canvas.mpl_disconnect(self.cid)

    def flip_tile(self, x, y):
        for dx, dy in [(0, 0), (0, 1), (0, -1), (1, 0), (-1, 0)]:
            nx, ny = x + dx, y + dy
            if 0 <= nx < self.N and 0 <= ny < self.N:
                self.grid[ny, nx] = not self.grid[ny, nx]

    def show_answer(self, event):
        solution = self.solve_puzzle(self.grid)
        if solution is not None:
            self.display_solution(solution)
        else:
            print("No solution found.")

    def solve_puzzle(self, grid, max_duration=5):
        def flip(grid, x, y):
            for dx, dy in [(0, 0), (0, 1), (0, -1), (1, 0), (-1, 0)]:
                nx, ny = x + dx, y + dy
                if 0 <= nx < self.N and 0 <= ny < self.N:
                    grid[nx, ny] = not grid[nx, ny]

        initial_state = grid.copy()
        target_state = np.ones((self.N, self.N), dtype=bool)

        queue = deque([(initial_state, [])])
        visited = set()
        start_time = time.time()

        while queue:
            if time.time() - start_time > max_duration:
                print("Solving the puzzle took too long.")
                return None

            current_grid, path = queue.popleft()
            if np.array_equal(current_grid, target_state):
                solution_grid = np.zeros((self.N, self.N), dtype=bool)
                for x, y in path:
                    solution_grid[x, y] = True
                return solution_grid

            state_tuple = tuple(map(tuple, current_grid))
            if state_tuple in visited:
                continue
            visited.add(state_tuple)

            for i in range(self.N):
                for j in range(self.N):
                    new_grid = current_grid.copy()
                    flip(new_grid, i, j)
                    new_path = path + [(i, j)]
                    queue.append((new_grid, new_path))

        return None  # 如果没有找到解决方案，则返回 None

    def display_solution(self, solution):
        fig, ax = plt.subplots()
        ax.set_xticks([])
        ax.set_yticks([])
        for spine in ax.spines.values():
            spine.set_linewidth(2)
        for i in range(self.N):
            for j in range(self.N):
                if solution[i, j]:
                    rect = plt.Rectangle([j, self.N - i - 1], 1, 1, facecolor='red', edgecolor='black', linewidth=0.5)
                    ax.add_patch(rect)
                else:
                    rect = plt.Rectangle([j, self.N - i - 1], 1, 1, facecolor='white', edgecolor='black', linewidth=0.5)
                    ax.add_patch(rect)
        ax.set_xlim(0, self.N)
        ax.set_ylim(0, self.N)
        ax.set_aspect('equal')
        plt.show()

    def generate_solvable_puzzle(self):
        def flip(board, i, j):
            """
            翻转位置 (i, j) 及其上下左右相邻的格子.
            """
            n = len(board)
            board[i, j] ^= 1
            if i > 0:
                board[i - 1, j] ^= 1
            if i < n - 1:
                board[i + 1, j] ^= 1
            if j > 0:
                board[i, j - 1] ^= 1
            if j < n - 1:
                board[i, j + 1] ^= 1

        n = self.N
        board = np.zeros((n, n), dtype=bool)

        # 随机翻转一些位置，确保生成的棋盘是可解的
        num_flips = np.random.randint(1, n * n + 1)
        flips = np.random.choice(n * n, num_flips, replace=False)

        for flip_index in flips:
            i, j = divmod(flip_index, n)
            flip(board, i, j)

        return board


# 创建和显示游戏界面
flip_game = FlipGame()
plt.show()
