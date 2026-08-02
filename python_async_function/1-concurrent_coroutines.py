#!/usr/bin/env python3
"""Module for multiple coroutines at the same time"""

import asyncio
from typing import List

wait_random = __import__("0-basic_async_syntax").wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """Spawn wait_random n times with given max_delay
    and return the delays in a list
    """
    tasks = [asyncio.create_task(wait_random(max_delay))
             for _ in range(n)]
    completed = []
    for task in asyncio.as_completed(tasks):
        completed.append(await task)

    return completed
