import matplotlib.pyplot as plt
import numpy as np
import matplotlib.colors as mcolors
from matplotlib.widgets import Button


class FlipGame:
    def __init__(self, N=4):
        self.N = N
        self.grid = np.zeros((N, N), dtype=bool)  # 创建大小为 NxN 的布尔类型二维数组，初始状态为 False（白色）
        self.colors = [(0.7, 0.9, 1.0), (0.5, 0.0, 0.5)]  # 定义渐变色，从浅蓝到紫晶蓝
        self.cmap = mcolors.LinearSegmentedColormap.from_list('custom_cmap', self.colors, N=256)  # 创建颜色映射

        self.fig, self.ax = plt.subplots()  # 创建 Matplotlib 图表和子图
        self.fig.subplots_adjust(bottom=0.2)  # 调整子图位置，给底部留出空间用于按钮
        self.draw_grid()  # 绘制网格

        # 添加重置按钮
        reset_ax = plt.axes([0.8, 0.05, 0.1, 0.075])  # 创建按钮位置和大小
        self.reset_button = Button(reset_ax, 'Reset')  # 创建按钮
        self.reset_button.on_clicked(self.reset_grid)  # 绑定点击事件

        self.cid = self.fig.canvas.mpl_connect('button_press_event', self.on_click)  # 绑定点击事件到方法，跟qt差不多

    def draw_grid(self):
        self.ax.clear()  # 清空当前子图
        self.ax.set_xticks([])  # 移除 x 轴刻度
        self.ax.set_yticks([])  # 移除 y 轴刻度

        # 设置子图粗边框
        for spine in self.ax.spines.values():
            spine.set_linewidth(2)

        # 遍历每个格子
        for i in range(self.N):
            for j in range(self.N):
                if self.grid[i, j]:  # 如果格子被翻转
                    distance = np.sqrt((i - self.N / 2) ** 2 + (j - self.N / 2) ** 2)  # 计算到网格中心的距离
                    alpha = max(0, min(1, distance / (self.N / 2)))  # 限制 alpha 在 0 到 1 的范围内
                    gradient = np.linspace(0, 1, 256).reshape(1, -1)  # 创建渐变颜色数组
                    gradient = np.vstack((gradient, gradient))
                    self.ax.imshow(gradient, aspect='auto', extent=(j, j + 1, self.N - i - 1, self.N - i),
                                   cmap=self.cmap, alpha=alpha)  # 绘制渐变色格子
                else:  # 如果格子未翻转
                    rect = plt.Rectangle([j, self.N - i - 1], 1, 1, facecolor='white', edgecolor='black',
                                         linewidth=0.5)  # 创建白色矩形
                    self.ax.add_patch(rect)  # 添加矩形到子图

        self.ax.set_xlim(0, self.N)  # 设置 x 轴范围
        self.ax.set_ylim(0, self.N)  # 设置 y 轴范围
        self.ax.set_aspect('equal')  # 保持比例相等
        self.fig.canvas.draw()  # 更新子图

    def on_click(self, event):
        if event.inaxes != self.ax:
            return

        x, y = int(event.xdata), int(event.ydata)  # 获取点击位置
        self.flip_tile(x, y)  # 翻转点击位置的格子及其相邻格子
        self.draw_grid()  # 重新绘制网格

        if np.all(self.grid):  # 如果所有格子都被翻转
            print("Congratulations! You win!")
            self.fig.canvas.mpl_disconnect(self.cid)  # 游戏结束后断开点击事件监听

    def flip_tile(self, x, y):
        for dx, dy in [(0, 0), (0, 1), (0, -1), (1, 0), (-1, 0)]:  # 翻转点击位置及其上下左右相邻格子
            nx, ny = x + dx, y + dy
            if 0 <= nx < self.N and 0 <= ny < self.N:
                self.grid[ny, nx] = not self.grid[ny, nx]

    def reset_grid(self, event):
        self.grid[:] = False  # 重置网格状态为初始状态
        self.draw_grid()  # 重新绘制网格


# 创建和显示游戏界面
flip_game = FlipGame()
plt.show()
