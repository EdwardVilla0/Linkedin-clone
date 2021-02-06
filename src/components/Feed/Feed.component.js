import React from 'react'
import CreateIcon from '@material-ui/icons/Create';
import InputOption from '../InputOption/InputOption.component';
import ImageIcon from '@material-ui/icons/Image'
import './Feed.styles.css'

function Feed() {
    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input type="text" />
                        <button type="submit">Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption Icon={ImageIcon} title="Photo" color="#70b5f9" />
                </div>
            </div>
        </div>
    )
}

export default Feed
