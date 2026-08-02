#!/usr/bin/env python3
"""Module for basic async syntax"""

import random
import asyncio


async def wait_random(max_delay: int = 10) -> float:
    """Function to wait a random time between 0 and max delay"""
    delay: float = random.uniform(0, max_delay)
    await asyncio.sleep(delay)
    return delay
