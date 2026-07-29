#!/usr/bin/env python3
"""Module for annotated make_multiplier function"""

from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """Function that takes a float and returns a function to multiply"""
    return lambda num: num * multiplier
