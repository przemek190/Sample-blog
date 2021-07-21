import { useMemo, useState } from 'react'

const usePagination = elements => {
    const [currentPage, setCurrentPage] = useState(1)

    const pages = useMemo(() => {
        return Math.ceil(elements.length / 4)
    }, [elements])

    const handlePageChange = ({ selected: selectedPage }) => {
        setCurrentPage(selectedPage + 1)
    }

    return {
        currentPage,
        pages,
        handlePageChange
    }
}

export default usePagination