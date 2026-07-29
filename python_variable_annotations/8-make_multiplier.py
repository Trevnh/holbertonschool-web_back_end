#!/usr/bin/env python3
"""Module for annotated make_multiplier function"""

from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """Function that takes a float and multiplies it by itself"""
    return multiplier * multiplier
    