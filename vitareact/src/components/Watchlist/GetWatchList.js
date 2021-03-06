// Component Returns a watchlist
import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import axiosInstance from '../../axios'
import Preloader from '../utils/Preloader'
import rowStyle from '../css/row.module.css';
import profileStyle from '../css/profile.module.css'

// working beacuse of global import 
// import '../css/gridResults.css'

function GetWatchList({ id, name, videoIds }) {
	const [loading, setLoading] = useState(true);
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		getVideosInPlayList(videoIds);
	}, [videoIds]);

	const getVideosInPlayList = async (arr) => {
		const promises = arr.map(async (videoId) => {
			return await axiosInstance.get(`video/video-list/${videoId}/`);
		});

		const responses = await Promise.all(promises);
		const allvideos = responses.map((element) => element.data);
		setVideos(allvideos);
		setLoading(false);
	};
    // TODO:
    // 1. return a horizontal scroll-list
    // 2. remove from playlist
    return (
        <div>
        {   
            (loading)
            ? ( 
                <div style={{width: '100vw', height: '25vh'}}>
                    <Preloader />
                </div>
            )
            : (
                <>
                <h3 className={profileStyle.watchlistName}>{name}</h3>
                <div className={rowStyle.row_posters}>
                {   
                    videos.map(item => (
                        <Link key={item.id} to={`../../preplay/${item.id}`}>
                            <div className="resultItem">
                                <img src={item.thumbnail} alt="img" className="resultThumbnail" />
                                <div className="overlay overlayBottom">
                                    <div className="resultInfo">
                                        <p className="resultTitle">
                                            {
                                                (item.title.length > 32)
                                                ? (`${item.title.substr(0, 30)}...`)
                                                : (item.title)
                                            }
                                        </p>
                                        <p className="resultDescription">
                                            {
                                                (item.description.length > 95)
                                                ? (`${item.description.substr(0, 95)}...`)
                                                : (item.description)
                                            }
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))
                }
                </div>
                </>
            )
        }
        </div>
    )
}

export default GetWatchList;
