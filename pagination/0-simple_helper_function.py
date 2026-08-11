#!/usr/bin/env python3
"""Modulue for Simple Helper Function to get index_range"""

from typing import Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """Function to return index range Tuple from page and page_size"""
    start = (page - 1) * page_size
    end = page * page_size
    return (start, end)
