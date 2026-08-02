#!/usr/bin/env python3
"""Module to measure runtime"""

import asyncio
import time

wait_n = __import__("1-concurrent_coroutines").wait_n


def measure_time(n: int, max_delay: int) -> float:
    """Function to measure total runtime of measure_time"""
    start = time.time()

    asyncio.run(wait_n(n, max_delay))

    return (time.time() - start) / n
