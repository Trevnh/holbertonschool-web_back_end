#!/usr/bin/env python3
"""Module for annotated element_length function"""

from typing import Iterable, Sequence, List, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """Function to find element length"""
    return [(i, len(i)) for i in lst]
