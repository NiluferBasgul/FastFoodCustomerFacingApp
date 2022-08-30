const LunchAndBreakfastSection = () => {

    return <section
        style={{
            backgroundSize: 'cover',
            minHeight: 430,
            backgroundImage: 'url("https://media.sunbasket.com/2020/12/market-carousel-lunch-2048x634.jpg")',
            backgroundPosition: 'center'
        }} className="market-launch-carousel-section d-flex w-100">

        <div className='container-md d-flex align-items-center justify-content-start justify-content-center justify-content-lg-start mb-4 pb-5'>
            <div className="text py-4">
                <p>
                    <span
                        className='bitter text-capitalize display-3 fw-light'
                        style={{
                            padding: '2px 16px',
                            background: 'rgb(246 195 67)',
                            color: '#222',
                        }}>Let’s do lunch</span>
                </p>
                <p>
                    <span
                        className='bitter text-capitalize display-3 fw-light'
                        style={{
                            padding: '2px 16px',
                            background: 'rgb(246 195 67)',
                            color: '#222',
                        }}>
                        & breakfast.</span></p>
                <p className='text-first-letter-capitalize bitter mt-5'>Heck, snacks too. Add Market items to your basket for feel-good deliciousness.</p>
                <a href="/menu" className="btn btn-warning btn-lg text-dark fw-bold bitter">Check it Out</a>
            </div>
        </div>
    </section>
}

export default LunchAndBreakfastSection;