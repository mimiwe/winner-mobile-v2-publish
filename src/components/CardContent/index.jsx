import React from 'react';
import UploadIcon from '../../assets/myPage/upload.png';
import CloseIcon from '../../assets/myPage/close-white.png';

const CardContent = ({
    checkedState = null,
    index = null,
    winAmount = '0',
    withButtons = true,
    withInput = true,
    setCheckedState = null,
    showBetNumber = true,
    withUploadButton = false,
    uploadHandler = null,
    withCancelButton = false,
    cancelHandler = null,
    id = 0,
    number = "1",
    hasHistory = null,
    time = " 2021-06-29 15:45",
    isPopup = true,
    type,
    canUpload = false,
    secondCard,
    lastElement,
}) => {

    const handleOnChange = () => {

        setCheckedState(checkedState => {
            return checkedState.map((item, j) => {
                console.log(j)
                return `${j}` === number ? !item : item
            })
        })

        console.log(checkedState)
        // console.log(updatedCheckedState)

        console.log("Position : ", number)
    };

    return (
        <div className='cardContent'>
            <div style={{ margin: '1.5rem', marginBottom: '0', marginTop: withInput ? (secondCard ? '2.1rem' : '2.23rem') : '2.0625rem', display: 'flex', justifyContent: withUploadButton || withCancelButton ? 'space-between' : '', alignItems: 'center' }} className={`flex flex-wrap items-center h-full  ${withUploadButton || withCancelButton ? 'justify-between' : ''}`}>

                <div style={{ width: '', background: '', lineHeight: '1.5', display: 'flex', alignItems: 'center' }} className='flex items-center'>
                    {withInput && (
                        <div style={{ margin: "-0.9rem 2.65rem 0px 0.7rem", marginTop: lastElement ? '-4.9rem' : '-0.9rem' }} className="relative text-left">
                            <label className="form-control">
                                <input
                                    key={Math.random()}
                                    className='w-12 h-12'
                                    type="checkbox"
                                    checked={checkedState[number]}
                                    onChange={() => handleOnChange()}
                                />
                            </label>
                        </div>
                    )}
                    <div>
                        {showBetNumber && (
                            <div style={{ WebkitTextStroke: "0.2px", fontSize: '2.625rem', marginBottom: '0.375rem', fontFamily: 'SpoqaHanSansNeo', letterSpacing: '-0.07rem', color: '#c8c8c8' }} className="w-full font-spoqa text-left text-gray-r7b7b7b"><span className='font-spoqaMedium text-gray-r585858' style={{ fontSize: '2.625rem', fontFamily: 'SpoqaHanSansNeoMedium', color: '#ccc2b6' }}>베팅번호 :</span> 1891241599</div>)}
                        <div style={{ WebkitTextStroke: "0.2px", fontSize: '2.625rem', marginBottom: '0.25rem', fontFamily: 'SpoqaHanSansNeo', color: '#c8c8c8', letterSpacing: '-0.07rem' }} className="w-full font-spoqa text-left text-gray-r7b7b7b"><span className='font-spoqaMedium text-gray-r585858' style={{ fontSize: '2.625rem', fontFamily: 'SpoqaHanSansNeoMedium', letterSpacing: '-0.07rem', color: '#ccc2b6' }}>베팅시간 :</span>{time}</div>
                        {hasHistory && (
                            <div style={{ WebkitTextStroke: "0.2px", fontSize: '2.625rem', marginBottom: '0.375rem', fontFamily: 'SpoqaHanSansNeo', color: '#c8c8c8' }} className="w-full font-spoqa text-left text-gray-r7b7b7b"><span className='font-spoqaMedium text-gray-r585858' style={{ fontSize: '2.625rem', letterSpacing: '-0.07rem', fontFamily: 'SpoqaHanSansNeoMedium', color: '#ccc2b6' }}>베팅내역 :</span>{hasHistory}</div>
                        )}
                        <div style={{ marginBottom: '0.36rem', display: 'flex', letterSpacing: '-0.07rem', fontFamily: 'SpoqaHanSansNeo', color: '#c8c8c8' }} className='flex'>
                            <div style={{ WebkitTextStroke: "0.2px", fontSize: '2.625rem', marginRight: '3.8125rem', fontFamily: 'SpoqaHanSansNeo' }} className="font-spoqa text-left text-gray-r7b7b7b"><span className='font-spoqaMedium text-gray-r585858' style={{ fontSize: '2.625rem', fontFamily: 'SpoqaHanSansNeoMedium', color: '#ccc2b6' }}>베팅금액 :</span> 5,000</div>
                            <div style={{ WebkitTextStroke: "0.2px", fontSize: '2.625rem', fontFamily: 'SpoqaHanSansNeo' }} className="font-spoqa text-left text-gray-r7b7b7b"><span className='font-spoqaMedium text-gray-r585858' style={{ fontSize: '2.625rem', color: '#ccc2b6' }}>배당률 :</span> 4.34</div>
                        </div>
                        {isPopup ? (
                            <>
                                <div style={{ WebkitTextStroke: "0.2px", fontSize: '2.625rem', marginRight: '3.8125rem', marginBottom: '0.375rem', fontFamily: 'SpoqaHanSansNeo', letterSpacing: '-0.07rem', color: '#c8c8c8' }} className="font-spoqa text-left text-gray-r7b7b7b"><span className='font-spoqaMedium text-gray-r585858' style={{ fontSize: '2.625rem', fontFamily: 'SpoqaHanSansNeoMedium', color: '#ccc2b6' }}>예상적중금액 :</span> 20,000</div>
                                <div style={{ WebkitTextStroke: "0.2px", fontSize: '2.625rem', fontFamily: 'SpoqaHanSansNeo', letterSpacing: '-0.07rem', marginBottom: '0.89rem' }} className="font-spoqa text-left text-gray-r7b7b7b"><span className='font-spoqaMedium text-gray-r585858' style={{ fontSize: '2.625rem', color: '#ccc2b6' }}>당첨금 :</span> <span className={`${winAmount.includes("+") && "text-red-d52e2e"}`} style={{ color: winAmount.includes("+") ? '#e65454' : '#ccc2b6' }}>{winAmount}</span></div>
                            </>
                        ) : (
                            <div className='flex' style={{ display: 'flex', letterSpacing: '-0.07rem', fontFamily: 'SpoqaHanSansNeo' }}>
                                <div style={{ WebkitTextStroke: "0.2px", fontSize: '2.625rem', marginRight: '3.8125rem', fontFamily: 'SpoqaHanSansNeo' }} className="font-spoqa text-left text-gray-r7b7b7b"><span className='font-spoqaMedium text-gray-r585858' style={{ fontSize: '2.625rem', fontFamily: 'SpoqaHanSansNeoMedium' }}>예상적중금액 :</span> 20,000</div>
                                <div style={{ WebkitTextStroke: "0.2px", fontSize: '2.625rem', fontFamily: 'SpoqaHanSansNeo' }} className="font-spoqa text-left text-gray-r7b7b7b"><span className='font-spoqaMedium text-gray-r585858' style={{ fontSize: '2.625rem', fontFamily: 'SpoqaHanSansNeoMedium' }}>당첨금 :</span> <span className={`${winAmount.includes("+") && "text-red-d52e2e"}`}>{winAmount}</span></div>
                            </div>
                        )}

                    </div>
                </div>
                {withUploadButton === true && (
                    <div
                        style={{ width: '9rem', height: '9rem', padding: '0.1875rem', margin: '-1.4rem -0.4rem 0 0', background: 'linear-gradient(to top, #3e4c8e, #6393bb 50%, #528bcc)', borderRadius: '1rem' }}
                    >
                        <button
                            onClick={() => canUpload === true && uploadHandler(id)}
                            style={{ width: '100%', height: '100%', background: 'linear-gradient(to top, #3a6185, #4575a8 50%, #528bcc)', borderRadius: '0.7rem' }}
                            className="hover"
                        >
                            <div className="flex w-full h-full items-center justify-center flex-wrap rounded-2xl border border-blue-r70a8f5 bg-gradient-to-b from-blue-r1491fc to-blue-r0675db cursor-pointer">
                                <img style={{ width: '3.1875rem', height: '3.25rem', marginTop: '0.1rem' }} className="object-contain" src={UploadIcon} alt="" />
                            </div>
                        </button>
                    </div>
                )}
                {withCancelButton && (
                    <button
                        onClick={() => cancelHandler(id)}
                        style={{ width: '9rem', height: '9rem', padding: '1px' }}
                        className="flex items-center justify-center rounded-2xl hover:opacity-75 bg-brown-r7e3636"
                    >
                        <div
                            className="flex items-center justify-center h-full w-full rounded-2xl border border-red-f36576 bg-gradient-to-b from-red-f03a50 to-red-cf254d cursor-pointer"
                        >
                            <img style={{ width: '2.5rem', height: '2.5rem' }} className="object-contain" src={CloseIcon} alt="" />
                        </div>
                    </button>
                )}
            </div>
            {/* {withButtons && (
                <div style={{ margin: '3.75rem 0.875rem', marginTop: '1.875rem', marginBottom: '0' }} className="flex items-center justify-between">
                    <div className="flex w-full">
                        <button
                            style={{ padding: '1px', height: '7.3125rem' }}
                            className="flex flex-1 items-center justify-center mr-4 rounded-2xl bg-blue-r0070d9 hover:opacity-75"
                        // onClick={() => allSelectButtonPressed()}
                        >
                            <div
                                className="flex items-center justify-center h-full w-full rounded-2xl border border-blue-r3ba3fc bg-gradient-to-b from-blue-r1491fc via-blue-r0e84ed to-blue-r0675db"
                            >
                                <span style={{ fontSize: '2.8125rem' }} className="font-spoqaMedium tracking-tight text-14px text-white pt-px">내역올리기</span>
                            </div>
                        </button>
                        <button
                            style={{ padding: '1px', height: '7.3125rem' }}
                            className="flex flex-1 items-center justify-center m-0 rounded-2xl bg-brown-r7e3636 hover:opacity-75"
                        >
                            <div
                                className="flex items-center justify-center h-full w-full rounded-2xl border border-red-f36576 bg-gradient-to-b from-red-f03a50 to-red-cf254d cursor-pointer"
                            >
                                <span style={{ fontSize: '2.8125rem' }} className="font-spoqaMedium tracking-tight text-14px text-white pt-px">내역삭제</span>
                            </div>
                        </button>
                    </div>
                </div>
            )} */}
            {withButtons && (
                <div className="two-buttons-container">
                    <button style={{ height: '7.3125rem' }}
                        // onClick={() => navigate("/freeboard")} 
                        className="flex items-center justify-center w-1/2 mr-4 rounded-2xl bg-blue-r0070d9">
                        <div style={{ width: '100%', height: '100%', borderRadius: '1rem', padding: '0.1875rem' }}>
                            <div style={{ width: '100%', height: '100%', background: 'linear-gradient(to top, #3a6287, #4777ab 50%, #518bcb)', borderRadius: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <span style={{ color: '#d6f3ff' }}>내역올리기</span>
                            </div>
                        </div>
                    </button>
                    <button style={{ background: 'linear-gradient(to top, #4b0923, #e88895)', height: '7.3125rem', padding: '0.1875rem', fontSize: '2.8125rem' }}
                        // onClick={() => navigate("/freeboard")} 
                        className="flex items-center justify-center w-1/2 rounded-2xl bg-gray-r171a1d">
                        <div style={{ width: '100%', height: '100%', borderRadius: '1rem' }}>
                            <div
                                style={{ width: '100%', height: '100%', background: 'linear-gradient(to top, #96341d, #e06446)', borderRadius: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                            >
                                <span style={{ color: '#ffd2d2' }}>내역삭제</span>
                            </div>
                        </div>
                    </button>
                </div>
            )}
        </div>
    )
}

export default CardContent;
