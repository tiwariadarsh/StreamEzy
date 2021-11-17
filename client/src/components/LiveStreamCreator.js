import React from 'react'
import '../style/LiveStreamCreator.css'
import ReactPlayer from 'react-player';
import sampleVideo from '../assets/sample2.mp4'
{/* <ReactPlayer url='' controls/> */}

function LiveStreamCreator() {
    return (
        <div className='liveStreamCreator'>
            <div className='liveStreamCreator_left'>
                <div className='liveStreamCreator_video'>
                    <video className='liveStreamCreator_videoPlayer' src={sampleVideo} controls/>
                </div>
                <div className='liveStreamCreator_dashboard'>
                    <div className='liveStreamCreator_title'>PUBG: NEW STATE - Launch Week Stream Party! Ft. Ankkita, Payal, Krutika, Samay, Bhuvan, Raftaar</div>
                    <div className='liveStreamCreator_icons'>
                        <div className='liveStreamCreator_like'>
                            <i class="far fa-thumbs-up"></i>
                        </div>
                        <div className='liveStreamCreator_share'>
                            <i class="fas fa-share"></i>
                        </div>
                        <div className='liveStreamCreator_comment'>
                            <i class="fas fa-comment"></i>
                        </div>
                    </div>
                    <div className='liveStreamCreator_items'>
                        <div className='liveStreamCreator_dp'>
                            <i class="fas fa-user-astronaut"></i>
                            <span>Tanmay Bhat</span>
                        </div>
                        <div className='liveStreamCreator_subscribe'>
                            <button>Subscribe</button>
                        </div>
                    </div>
                </div>
                <div className='liveStreamCreator_description'>
                    PUBG: NEW STATE, is a new Battle Royale developed by PUBG STUDIOS, the company <br />
                    behind PLAYERUNKNOWN'S BATTLEGROUNDS (PUBG). <br />

                    In PUBG: NEW STATE, 100 players will fight on a new battleground with various weapons and               <br />
                    strategies until only one party remains. Utilize gear, vehicles, and consumables to survive the                 <br />
                    shrinking battleground to become the last Survivor standing! Find out more about the game               <br />
                    here: https://newstate.pubg.com                 <br />
                    <br />
                    Download the game now: https://pubgnewstate.onelink.me/7alc/...                 <br />
                    <br />
                    Song Credits - Bad Boy x Bad Girl by Badshah ft. Nikhita Gandhi
                    <br />
                    PUBG: NEW STATE Social Media Handles:               <br />
                    Facebook - https://www.facebook.com/OfficialPUBG...                 <br />
                    Instagram - https://www.instagram.com/pubgnewstat...                <br />
                    YouTube - https://www.youtube.com/channel/UCnEa...              <br />
                    Twitter - https://twitter.com/PUBG_NEWSTATE                 <br />
                    <br />
                    <br />
                    Check out my second channel: https://www.youtube.com/honestlybytan...               <br />
                    <br />
                    Follow me on Instagram: https://instagram.com/tanmaybhat                <br />
                    Follow me on my Discord: https://discordapp.com/invite/6Jf4de9              <br />
                    Submit your memes on Reddit: https://www.reddit.com/r/TanmayBhatKe...               <br />
                    <br />
                    Become a member for exclusive content and privileges: https://www.youtube.com/channel/UC0rE...              <br />
                    <br />
                    Channel Manager: Revant Talekar | https://www.instagram.com/revanttalekar/              <br />
                    <br />
                    My videos use Epidemic sounds. Visit this link for a 30 day free trial: http://share.epidemicsound.com/38jcPQ               <br />
                    <br />
                    Click here to live my life: https://amazon.in/shop/tanmaybhat               <br />
                    <br />
                    #NewStateTime #PUBGNEWSTATE #NextGenBattleRoyale                <br />
                </div>
            </div>
            <div className='liveStreamCreator_rigth'>
                <div className='liveStreamCreator_chats'>
                    <div style={{marginBottom:'0.5em',fontSize:"1.5em"}}>Live Chat</div>
                    <div className='chat'>
                        <i class="far fa-user-circle"></i>&nbsp;
                        <span>Ankit Rastogi</span>&nbsp;:&nbsp;
                        <span>how it would be looking on airport samaya saying bhuvan bhai nange aayen hain</span>
                    </div>
                    <div className='chat'>
                        <i class="far fa-user-circle"></i>&nbsp;
                        <span>Ankit Rastogi</span>&nbsp;:&nbsp;
                        <span>how it would be looking on airport samaya saying bhuvan bhai nange aayen hain</span>
                    </div>
                    <div className='chat'>
                        <i class="far fa-user-circle"></i>&nbsp;
                        <span>Ankit Rastogi</span>&nbsp;:&nbsp;
                        <span>how it would be looking on airport samaya saying bhuvan bhai nange aayen hain</span>
                    </div>
                    <div className='chat'>
                        <i class="far fa-user-circle"></i>&nbsp;
                        <span>Ankit Rastogi</span>&nbsp;:&nbsp;
                        <span>how it would be looking on airport samaya saying bhuvan bhai nange aayen hain</span>
                    </div>
                    <div className='chat'>
                        <i class="far fa-user-circle"></i>&nbsp;
                        <span>Ankit Rastogi</span>&nbsp;:&nbsp;
                        <span>how it would be looking on airport samaya saying bhuvan bhai nange aayen hain</span>
                    </div>
                    <div className='chat'>
                        <i class="far fa-user-circle"></i>&nbsp;
                        <span>Ankit Rastogi</span>&nbsp;:&nbsp;
                        <span>how it would be looking on airport samaya saying bhuvan bhai nange aayen hain</span>
                    </div>
                    <div className='chat'>
                        <i class="far fa-user-circle"></i>&nbsp;
                        <span>Ankit Rastogi</span>&nbsp;:&nbsp;
                        <span>how it would be looking on airport samaya saying bhuvan bhai nange aayen hain</span>
                    </div>
                    <div className='chat'>
                        <i class="far fa-user-circle"></i>&nbsp;
                        <span>Ankit Rastogi</span>&nbsp;:&nbsp;
                        <span>how it would be looking on airport samaya saying bhuvan bhai nange aayen hain</span>
                    </div>
                    <div className='chat'>
                        <i class="far fa-user-circle"></i>&nbsp;
                        <span>Ankit Rastogi</span>&nbsp;:&nbsp;
                        <span>how it would be looking on airport samaya saying bhuvan bhai nange aayen hain</span>
                    </div>
                    <div className='chat'>
                        <i class="far fa-user-circle"></i>&nbsp;
                        <span>Ankit Rastogi</span>&nbsp;:&nbsp;
                        <span>how it would be looking on airport samaya saying bhuvan bhai nange aayen hain</span>
                    </div>
                    <div className='chat'>
                        <i class="far fa-user-circle"></i>&nbsp;
                        <span>Ankit Rastogi</span>&nbsp;:&nbsp;
                        <span>how it would be looking on airport samaya saying bhuvan bhai nange aayen hain</span>
                    </div>
                    <div className='chat'>
                        <i class="far fa-user-circle"></i>&nbsp;
                        <span>Ankit Rastogi</span>&nbsp;:&nbsp;
                        <span>how it would be looking on airport samaya saying bhuvan bhai nange aayen hain</span>
                    </div>
                </div>
                <div className='liveStreamCreator_nextVideos'>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default LiveStreamCreator
