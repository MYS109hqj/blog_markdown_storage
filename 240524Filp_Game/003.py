import matplotlib.pyplot as plt
import numpy as np
import matplotlib.colors as mcolors


def draw_grid(N, gradient_cells):
    # 创建自定义颜色映射
    colors = [(0.7, 0.9, 1.0), (0.5, 0.0, 0.5)]  # 从浅蓝到紫晶蓝
    cmap = mcolors.LinearSegmentedColormap.from_list('custom_cmap', colors, N=256)

    # 创建图像和轴
    fig, ax = plt.subplots()

    # 关闭坐标轴
    ax.set_xticks([])
    ax.set_yticks([])

    # 设置粗边框
    for spine in ax.spines.values():
        spine.set_linewidth(2)

    # 创建一个N*N的网格
    for i in range(N):
        for j in range(N):
            if (i, j) in gradient_cells:
                # 创建渐变颜色
                gradient = np.linspace(0, 1, 256).reshape(1, -1)
                gradient = np.vstack((gradient, gradient))
                ax.imshow(gradient, aspect='auto', extent=(j, j + 1, i, i + 1), cmap=cmap)
            else:
                # 白色方格
                rect = plt.Rectangle([j, i], 1, 1, facecolor='white', edgecolor='black', linewidth=0.5)
                ax.add_patch(rect)

    # 设置轴的限制
    ax.set_xlim(0, N)
    ax.set_ylim(0, N)

    # 保持纵横比一致
    ax.set_aspect('equal')

    plt.show()


# 指定网格大小
N = 5

# 指定渐变颜色的方格坐标 (例如：[(1, 2), (3, 4)])
gradient_cells = [(1, 2), (3, 4)]

draw_grid(N, gradient_cells)
