import React from 'react'

const SelectAllButton = (
    {
        isAllSelected,
        setCheckedState,
        setAllSelected,
        count = 30,
        buttonsNumber = 2,
        btn1Text = '선택삭제',
        btn2Text = '내역올리기',
    }) => {

    function allSelectButtonPressed() {
        if (isAllSelected) {
            setCheckedState(Array(count).fill(false))
        } else {
            setCheckedState(Array(count).fill(true))
        }
        setAllSelected(!isAllSelected)
    }

    if (buttonsNumber === 3) {
        return (
            <div className="select-all-buttons">
                <div className="flex-btn">
                    <button
                        style={{
                            background: 'linear-gradient(to top, rgb(77, 60, 10), rgb(156, 123, 74) 50%, rgb(231, 183, 134))',
                        }}
                        className="common-button flex flex-1 items-center justify-center mr-4 rounded-2xl bg-gray-r171a1d hover:opacity-75"
                        onClick={() => allSelectButtonPressed()}
                    >
                        <div
                            style={{
                                background: 'linear-gradient(to top, rgb(128, 96, 63), rgb(147, 110, 72) 50%, rgb(165, 123, 82))',
                            }}
                            className="div-text"
                        >
                            <span style={{ color: 'rgb(255, 223, 189)' }}>{isAllSelected ? "선택해제" : "전체선택"}</span>
                        </div>
                    </button>
                    <button
                        style={{
                            background: 'linear-gradient(to top, #4b0923, #e88895)',
                        }}
                        className="common-button flex flex-1 items-center justify-center mr-4 rounded-2xl bg-brown-r7e3636 hover:opacity-75"
                    >
                        <div
                            style={{
                                background: 'linear-gradient(to top, #e06446, #96341d)',
                            }}
                            className="div-text"
                        >
                            <span style={{ color: 'rgb(255, 223, 189)' }}>{btn1Text}</span>
                        </div>
                    </button>
                    <button
                        style={{
                            background: 'linear-gradient(to top, #3d4a8d, #88d9e8)',
                        }}
                        className="common-button flex flex-1 items-center justify-center rounded-2xl bg-blue-r0070d9 hover:opacity-75"
                    // onClick={() => allSelectButtonPressed()}
                    >
                        <div
                            style={{
                                background: 'linear-gradient(to top, #528ccd, #396084)',
                            }}
                            className="div-text"
                        >
                            <span style={{ color: 'rgb(255, 223, 189)' }}>{btn2Text}</span>
                        </div>
                    </button>
                </div >
            </div >
        )
    }

    return (
        <div style={{ margin: '3.75rem 1.875rem', marginTop: '1.875rem', marginBottom: '2.5rem' }} >
            <div>
                <button
                    style={{ height: '7.3125rem' }}
                    className="first-btn"
                    onClick={() => allSelectButtonPressed()}
                >
                    <div
                        style={{
                            background: "linear-gradient(to bottom, #555555, #333333)",
                        }}
                        className="flex items-center justify-center h-full w-full rounded-2xl border border-gray-r737579 cursor-pointer"
                    >
                        <span style={{ fontSize: '2.8125rem' }} className="font-spoqaMedium tracking-tight text-14px text-white  mb-2">{isAllSelected ? "선택해제" : "전체선택"}</span>
                    </div>
                </button>
                <button
                    style={{ height: '7.3125rem' }}
                    className="common-button flex flex-1 items-center justify-center m-0 rounded-2xl bg-brown-r7e3636 hover:opacity-75"
                >
                    <div
                        style={{
                            background: "linear-gradient(to bottom, #f03a50, #cf254d)",
                        }}
                        className="flex items-center justify-center h-full w-full rounded-2xl border border-red-f36576 cursor-pointer"
                    >
                        <span style={{ fontSize: '2.8125rem' }} className="font-spoqaMedium tracking-tight text-14px text-white mb-2">{btn1Text}</span>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default SelectAllButton

