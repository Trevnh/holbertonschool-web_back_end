#!/usr/bin/env python3
"""Module for annotated to_kv function"""

from typing import Tuple, Union


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """Function to make tuples from k and v^2"""
    return (k, v ** 2)
