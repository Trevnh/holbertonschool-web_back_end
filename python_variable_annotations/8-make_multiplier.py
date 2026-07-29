#!/usr/bin/env python3
"""Module for annotated make_multiplier function"""

from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """Function that takes a float and returns a function to multiply"""
    def multiply(multiplier: float) -> float:
        """Function to multiply a number by itself"""
        return multiplier * multiplier
    return multiply
