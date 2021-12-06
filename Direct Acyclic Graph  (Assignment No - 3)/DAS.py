import networkx as nx
from matplotlib import pyplot as plt
g1 = nx.DiGraph()
g1.add_edges_from([("root", "a"), ("a", "b"), ("a", "e"), ("b", "c"), ("b", "d"), ("d", "e")])

plt.tight_layout()
nx.draw_networkx(g1, arrows=True)
plt.savefig("g1.png", format="PNG")

plt.clf()
nx.is_directed_acyclic_graph(g1)
list(nx.topological_sort(g1))
print(nx.is_directed_acyclic_graph(g1))

