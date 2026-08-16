#!/usr/bin/env python3
"""Module for Simple Pagination"""

import csv
import math
from typing import List


def index_range(page: int, page_size: int) -> tuple[int, int]:
    """Function to return index range Tuple from page and page_size"""
    start = (page - 1) * page_size
    end = page * page_size
    return (start, end)


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """Gets the paginated version of the data with the given
        aspects of page and page_size
        """
        assert isinstance(page, int)
        assert isinstance(page_size, int)
        assert page > 0
        assert page_size > 0
        (start, end) = index_range(page, page_size)

        return self.dataset()[start:end]
