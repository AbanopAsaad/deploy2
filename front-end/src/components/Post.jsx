import React from 'react'

export  function Post() {
  return (
    <main className="profile-page layout layout--2 text-white">
      <div className="container">
        
        <div className="room">
          <div className="room__top">
            <div className="room__topLeft">
              <a href="index.html">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                  <title>arrow-left</title>
                  <path
                    d="M13.723 2.286l-13.723 13.714 13.719 13.714 1.616-1.611-10.96-10.96h27.625v-2.286h-27.625l10.965-10.965-1.616-1.607z"
                  ></path>
                </svg>
              </a>
              <h3>Study Room</h3>
            </div>

            <div className="room__topRight">
              <a href="#">
                <svg
                  enable-background="new 0 0 50 50"
                  height="32"
                  viewBox="0 0 24 24"
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>edit</title>
                  <g>
                    <path d="m23.5 22h-15c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h15c.276 0 .5.224.5.5s-.224.5-.5.5z" />
                  </g>
                  <g>
                    <g>
                      <path
                        d="m2.5 22c-.131 0-.259-.052-.354-.146-.123-.123-.173-.3-.133-.468l1.09-4.625c.021-.09.067-.173.133-.239l14.143-14.143c.565-.566 1.554-.566 2.121 0l2.121 2.121c.283.283.439.66.439 1.061s-.156.778-.439 1.061l-14.142 14.141c-.065.066-.148.112-.239.133l-4.625 1.09c-.038.01-.077.014-.115.014zm1.544-4.873-.872 3.7 3.7-.872 14.042-14.041c.095-.095.146-.22.146-.354 0-.133-.052-.259-.146-.354l-2.121-2.121c-.19-.189-.518-.189-.707 0zm3.081 3.283h.01z"
                      />
                    </g>
                    <g>
                      <path
                        d="m17.889 10.146c-.128 0-.256-.049-.354-.146l-3.535-3.536c-.195-.195-.195-.512 0-.707s.512-.195.707 0l3.536 3.536c.195.195.195.512 0 .707-.098.098-.226.146-.354.146z"
                      />
                    </g>
                  </g>
                </svg>
              </a>
              <a href="#">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                  <title>remove</title>
                  <path
                    d="M27.314 6.019l-1.333-1.333-9.98 9.981-9.981-9.981-1.333 1.333 9.981 9.981-9.981 9.98 1.333 1.333 9.981-9.98 9.98 9.98 1.333-1.333-9.98-9.98 9.98-9.981z"
                  ></path>
                </svg>
              </a>
            </div>

             <button className="action-button" data-id="120" data-delete-url="https://randomuser.me/api/3324923"
            data-edit-url="profile.html">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
              <title>ellipsis-horizontal</title>
              <path
                d="M16 7.843c-2.156 0-3.908-1.753-3.908-3.908s1.753-3.908 3.908-3.908c2.156 0 3.908 1.753 3.908 3.908s-1.753 3.908-3.908 3.908zM16 1.98c-1.077 0-1.954 0.877-1.954 1.954s0.877 1.954 1.954 1.954c1.077 0 1.954-0.877 1.954-1.954s-0.877-1.954-1.954-1.954z">
              </path>
              <path
                d="M16 19.908c-2.156 0-3.908-1.753-3.908-3.908s1.753-3.908 3.908-3.908c2.156 0 3.908 1.753 3.908 3.908s-1.753 3.908-3.908 3.908zM16 14.046c-1.077 0-1.954 0.877-1.954 1.954s0.877 1.954 1.954 1.954c1.077 0 1.954-0.877 1.954-1.954s-0.877-1.954-1.954-1.954z">
              </path>
              <path
                d="M16 31.974c-2.156 0-3.908-1.753-3.908-3.908s1.753-3.908 3.908-3.908c2.156 0 3.908 1.753 3.908 3.908s-1.753 3.908-3.908 3.908zM16 26.111c-1.077 0-1.954 0.877-1.954 1.954s0.877 1.954 1.954 1.954c1.077 0 1.954-0.877 1.954-1.954s-0.877-1.954-1.954-1.954z">
              </path>
            </svg>
          </button> 
          </div>
          <div className="room__box scroll">
            <div className="room__header scroll">
              <div className="room__info">
                <h3>100 Days of Code Challenge</h3>
                <span>3 days ago</span>
              </div>
              <div className="room__hosted">
                <p>Hosted By</p>
                <a href="#" className="room__author">
                  <div className="avatar avatar--small">
                    <img src="https://randomuser.me/api/portraits/men/37.jpg" />
                  </div>
                  <span>@sherif</span>
                </a>
              </div>
              <div className="room__details">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, tenetur laudantium? Dicta repellendus
                rerum consectetur, voluptatem repudiandae eum ea porro cupiditate provident nulla, deserunt, ab ipsum
                corporis laboriosam deleniti molestias?
              </div>
              <span className="room__topics">JavaScript</span>
            </div>
            <div className="room__conversation">
              <div className="threads scroll">
                <div className="thread">
                  <div className="thread__top">
                    <div className="thread__author">
                      <a href="#" className="thread__authorInfo">
                        <div className="avatar avatar--small">
                          <img src="https://randomuser.me/api/portraits/men/37.jpg" />
                        </div>
                        <span>@sherif</span>
                      </a>
                      <span className="thread__date">3 day ago</span>
                    </div>
                    <div className="thread__delete">
                      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                        <title>remove</title>
                        <path
                          d="M27.314 6.019l-1.333-1.333-9.98 9.981-9.981-9.981-1.333 1.333 9.981 9.981-9.981 9.98 1.333 1.333 9.981-9.98 9.98 9.98 1.333-1.333-9.98-9.98 9.98-9.981z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="thread__details">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nobis, deserunt cum quibusdam aliquam
                    nihil unde et impedit, quaerat! Corporis praesentium aspernatur autem laboriosam natus similique,
                    adipisci nam maxime.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="room__message">
            <form action="#"><input name="" placeholder="Write your message here..." /></form>
          </div>
        </div>
       

       
        <div className="participants">
          <h3 className="participants__top">Participants <span>(1 Joined)</span></h3>
          <div className="participants__list scroll">
            <a href="profile.html" className="participant">
              <div className="avatar avatar--medium">
                <img src="https://randomuser.me/api/portraits/men/37.jpg" />
              </div>
              <p>
                sherif
                <span>@sherif</span>
              </p>
            </a>
          </div>
        </div>
    
      </div>
    </main>
  )
}