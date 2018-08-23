import React, { Component } from 'react';
import "../../App.css";
import { SocialIcon } from 'react-social-icons';

class Team extends Component {
  render() {
    return (
    <div className="container color">
		  <h1>About</h1>
			<hr/>
			<p className="big">This project was built by the <em><strong><a href={null}>Data Digger Group</a> </strong></em>
			 in collaboration with the <strong><a href={null}>2018/2019 (compssa) Administration of the Computer Science Department of the University of Ghana, Legon</a></strong>.
			</p>
      <div id="team" class="section md-padding">
			<h1>Our Team</h1>
		<div className="container">
			<div className="row">
				<div className="col-sm-4">
					<div className="team">
						<div className="team-img">
							<img className="img-responsive img-sizer" src={require("../../img/dan1.jpg")} alt="team 1"/>
							<div className="overlay">
								<div className="team-social">
								<SocialIcon url="http://twitter.com/in/jaketrent" color="#111A1C"/><br/>
								<SocialIcon url="http://google-plus.com/in/jaketrent" color="#111A1C"/><br/>
								<SocialIcon url="http://facebook.com/in/jaketrent" color="#111A1C"/>
								</div>
							</div>
						</div>

						<div className="team-content">
							<h3>Boadzie Daniel</h3>
							<span>Data Scientist/ Web Developer</span>
						</div>
					</div>
				</div>

				<div className="col-sm-4">
					<div className="team">
						<div className="team-img">
							<img className="img-responsive img-sizer" src={require("../../img/joseph.jpg")} alt="team 2"/>
							<div className="overlay">
								<div className="team-social">
								<SocialIcon url="http://twitter.com/in/jaketrent" color="#111A1C"/><br/>
								<SocialIcon url="http://google-plus.com/in/jaketrent" color="#111A1C"/><br/>
								<SocialIcon url="http://facebook.com/in/jaketrent" color="#111A1C"/>
								</div>
							</div>
						</div>
						<div className="team-content">
							<h3>Joseph Akayesi</h3>
							<span>Web Developer/ UX</span>
						</div>
					</div>
				</div>

				<div className="col-sm-4">
					<div className="team">
						<div className="team-img">
							<img className="img-responsive img-sizer" src={require("../../img/joshua.jpg")} alt="team 2"/>
							<div className="overlay">
								<div className="team-social">
								<SocialIcon url="http://twitter.com/in/jaketrent" color="#111A1C"/><br/>
								<SocialIcon url="http://google-plus.com/in/jaketrent" color="#111A1C"/><br/>
								<SocialIcon url="http://facebook.com/in/jaketrent" color="#111A1C"/>
								</div>
							</div>
						</div>
						<div className="team-content">
							<h3>Joshua Odoi</h3>
							<span>Systems Developer</span>
						</div>
					</div>
				</div>

				<div className="col-sm-4">
					<div className="team">
						<div className="team-img">
							<img className="img-responsive img-sizer" src={require("../../img/bruce.jpg")} alt="team 3"/>
							<div className="overlay">
								<div className="team-social">
								<SocialIcon url="http://twitter.com/in/jaketrent" color="#111A1C"/><br/>
								<SocialIcon url="http://google-plus.com/in/jaketrent" color="#111A1C"/><br/>
								<SocialIcon url="http://facebook.com/in/jaketrent" color="#111A1C"/>
								</div>
							</div>
						</div>
						<div className="team-content">
							<h3>Victor Bruce-Grabbe</h3>
							<span>Web Developer/ UX</span>
						</div>
					</div>
				</div>

				<div className="col-sm-4">
					<div className="team">
						<div className="team-img">
							<img className="img-responsive img-sizer" src={require("../../img/totti.jpg")} alt="team 2"/>
							<div className="overlay">
								<div className="team-social">
								<SocialIcon url="http://twitter.com/in/jaketrent" color="#111A1C"/><br/>
								<SocialIcon url="http://google-plus.com/in/jaketrent" color="#111A1C"/><br/>
								<SocialIcon url="http://facebook.com/in/jaketrent" color="#111A1C"/>
								</div>
							</div>
						</div>
						<div className="team-content">
							<h3>Emmanuel Osei</h3>
							<span>Web Designer/ UX</span>
						</div>
					</div>
				</div>

			</div>

		</div>

	 </div>

	 <div className="section md-padding up">
		<div className="section-header text-center">
					<h2 className="title">Get in touch</h2>
		</div>
			<div className="row">
				<div className="col-sm-4">
					<div className="contact">
						<i className=" fa fa-2x fa-phone"></i>
						<h3>Phone</h3>
						<p>+233-5473-10730</p>
					</div>
				</div>
				<div className="col-sm-4">
					<div className="contact">
						<i className="fa  fa-2x fa-envelope"></i>
						<h3>Email</h3>
						<p>boadziedaniel@gmail.com</p>
					</div>
				</div>
	
				<div className="col-sm-4">
					<div className="contact">
						<i className="fa fa-2x fa-map-marker"></i>
						<h3>Address</h3>
						<p>University of Ghana,<br/>Computer Science Department
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
    )
  }
}

export default Team;