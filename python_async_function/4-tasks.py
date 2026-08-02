#!/usr/bin/env python3
"""Module for multiple tasks"""

import asyncio
from typing import List

task_wait_random = __import__("3-tasks").task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """Spawn wait_random n times with given max_delay
    and return the delays in a list
    """
    tasks = [task_wait_random(max_delay)
             for _ in range(n)]

    completed: List[float] = []

    for task in asyncio.as_completed(tasks):
        completed.append(await task)

    return completed
