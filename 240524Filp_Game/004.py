import matplotlib.pyplot as plt
import numpy as np
import matplotlib.colors as mcolors
from matplotlib.widgets import Button


class FlipGrid:
    def __init__(self, N=4):
        self.N = N
        self.flipped = np.zeros((N, N), dtype=bool)
        self.colors = [(0.7, 0.9, 1.0), (0.5, 0.0, 0.5)]  # 从浅蓝到紫晶蓝
        self.cmap = mcolors.LinearSegmentedColormap.from_list('custom_cmap', self.colors, N=256)

        self.fig, self.ax = plt.subplots()
        self.fig.subplots_adjust(bottom=0.2)
        self.draw_grid()

        # 添加重置按钮
        reset_ax = plt.axes([0.8, 0.05, 0.1, 0.075])
        self.reset_button = Button(reset_ax, 'Reset')
        self.reset_button.on_clicked(self.reset_grid)

        self.cid = self.fig.canvas.mpl_connect('button_press_event', self.on_click)

    def draw_grid(self):
        self.ax.clear()
        self.ax.set_xticks([])
        self.ax.set_yticks([])

        # 设置粗边框
        for spine in self.ax.spines.values():
            spine.set_linewidth(2)

        for i in range(self.N):
            for j in range(self.N):
                if self.flipped[i, j]:
                    gradient = np.linspace(0, 1, 256).reshape(1, -1)
                    gradient = np.vstack((gradient, gradient))
                    self.ax.imshow(gradient, aspect='auto', extent=(j, j + 1, self.N - i - 1, self.N - i),
                                   cmap=self.cmap)
                else:
                    rect = plt.Rectangle([j, self.N - i - 1], 1, 1, facecolor='white', edgecolor='black', linewidth=0.5)
                    self.ax.add_patch(rect)

        self.ax.set_xlim(0, self.N)
        self.ax.set_ylim(0, self.N)
        self.ax.set_aspect('equal')
        self.fig.canvas.draw()

    def on_click(self, event):
        if event.inaxes != self.ax:
            return

        x, y = int(event.xdata), int(event.ydata)
        self.flipped[self.N - y - 1, x] = not self.flipped[self.N - y - 1, x]
        self.draw_grid()

    def reset_grid(self, event):
        self.flipped[:] = False
        self.draw_grid()


# 创建和显示网格界面
flip_grid = FlipGrid()
plt.show()
