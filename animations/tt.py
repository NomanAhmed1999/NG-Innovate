def memory_usage_with_set(board_sizes):
    """
    Analyze the memory usage of a memory-efficient solution using a 'set' instead of a list for tracking visited cells.

    Parameters:
    - board_sizes (list): List of board sizes to analyze (e.g., [100, 400, 900]).

    Returns:
    - dict: Memory usage in bytes for each board size using the new approach.
    """
    memory_results = {}

    for size in sorted(board_sizes):  # Ensure consistent order of board sizes
        # Initialize 'visited' set and 'queue'
        visited = set()  # Use a set to track visited cells
        queue = deque([(1, 0)])  # Start with initial cell in the queue
        visited.add(1)  # Mark the first cell as visited

        # Measure memory usage
        visited_memory = sys.getsizeof(visited)
        queue_memory = sys.getsizeof(queue)

        # Store results
        memory_results[size] = {
            "visited_memory_bytes": visited_memory,
            "queue_memory_bytes": queue_memory,
            "total_memory_bytes": visited_memory + queue_memory
        }

    return memory_results