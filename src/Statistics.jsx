import statImg1 from './assets/images/icon-brand-recognition.svg'
import statImg2 from './assets/images/icon-detailed-records.svg'
import statImg3 from './assets/images/icon-fully-customizable.svg'

function Statistics() {
    
    return <>
        <div className="stat-cont">
            <div className="stat-text">
                <h1 className="stat-h1">Advanced Statistics</h1>
                <p className="stat-p">Track how your links are performing across the web with our 
                advanced statistics dashboard.</p>
            </div>
            <div className="stat-card-cont">
            <div className="connecting-line"></div>
                <div className="stat-card">
                    <div className="img-cont">
                        <div className="img-bg"></div>
                        <img src={statImg1} alt="" className="stat-card-img" />
                    </div>
                    <h1 className="stat-card-h1">Brand Recognition</h1>
                    <p className="stat-card-p">Boost your brand recognition with each click. Generic links don’t 
                    mean a thing. Branded links help instil confidence in your content.</p>
                </div>
                <div className="stat-card">
                <div className="img-cont">
                        <div className="img-bg"></div>
                        <img src={statImg2} alt="" className="stat-card-img" />
                    </div>
                    <h1 className="stat-card-h1">Detailed Records</h1>
                    <p className="stat-card-p">Gain insights into who is clicking your links. Knowing when and where 
                    people engage with your content helps inform better decisions.</p>
                </div>
                <div className="stat-card">
                <div className="img-cont">
                        <div className="img-bg"></div>
                        <img src={statImg3} alt="" className="stat-card-img" />
                    </div>
                    <h1 className="stat-card-h1">Fully Customizable</h1>
                    <p className="stat-card-p">Improve brand awareness and content discoverability through customizable 
                    links, supercharging audience engagement.</p>
                </div>
            </div>
        </div>
    </>

}

export default Statistics