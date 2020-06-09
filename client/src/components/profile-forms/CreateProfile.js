import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { createProfile } from "../../actions/profile";
// Form to create a profile

const CreateProfile = ({ createProfile, history }) => {
  const [formData, setFormData] = useState({
    website: "",
    location: "",
    status: "",
    bio: "",
    twitter: "",
    facebook: "",
    linkedin: "",
    youtube: "",
    instagram: "",
  });

  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  const {
    website,
    location,
    status,
    skills,
    bio,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram,
  } = formData;

  const onChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData, history);
  };

  return (
    <Fragment>
      <h1 className="large text-primary">Create your profile</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Information about yourself
      </p>
      <small>* = required field</small>
      <form className="form" onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <select name="status" value={status} onChange={(e) => onChange(e)}>
            <option value="0">* Select gamer type</option>
            <option value="Newbie Gamer">Newbie Gamer</option>
            <option value="Hardcore Gamer">Hardcore Gamer</option>
            <option value="Social Gamer">Social Gamer</option>
            <option value="Puzzle Gamer">Puzzle Gamer</option>
            <option value="Trophy Hunter Gamer">Trophy Hunter Gamer</option>
            <option value="The Cheater Gamer">The Cheater Gamer</option>
            <option value="Destructive Gamer">Destructive Gamer</option>
            <option value="Old-School Gamer">Old-School Gamer</option>
            <option value="The Gambler Gamer">The Gambler Gamer</option>
            <option value="The Backseat Gamer">The Backseat Gamer</option>
            <option value="Super Competitive Gamer">
              Super Competitive Gamer
            </option>
            <option value="Other">Other</option>
          </select>
          <small className="form-text">
            Give us an idea of how you describe your gamer type
          </small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Website"
            name="website"
            value={website}
            onChange={(e) => onChange(e)}
          />
          <small className="form-text">
            Could be your own or a company website
          </small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Location"
            name="location"
            value={location}
            onChange={(e) => onChange(e)}
          />
          <small className="form-text">
            City & Country suggested (eg. London, England)
          </small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="* Interested gaming genres"
            name="skills"
            value={skills}
            onChange={(e) => onChange(e)}
          />
          <small className="form-text">
            Please use comma separated values (FPS Gamer, RTS Gamer, RPG Gamer)
          </small>
        </div>
        <div className="form-group">
          <textarea
            placeholder="A short introduction of yourself"
            name="bio"
            value={bio}
            onChange={(e) => onChange(e)}
          ></textarea>
          <small className="form-text">Tell us about yourself</small>
        </div>

        <div className="my-2">
          <button
            onClick={() => toggleSocialInputs(!displaySocialInputs)}
            type="button"
            className="btn btn-light"
          >
            Add Social Network Links
          </button>
          <span>Optional</span>
        </div>

        {displaySocialInputs && (
          <Fragment>
            <div className="form-group social-input">
              <i className="fab fa-twitter fa-2x"></i>
              <input
                type="text"
                placeholder="Twitter URL"
                name="twitter"
                value={twitter}
                onChange={(e) => onChange(e)}
              />
            </div>

            <div className="form-group social-input">
              <i className="fab fa-facebook fa-2x"></i>
              <input
                type="text"
                placeholder="Facebook URL"
                name="facebook"
                value={facebook}
                onChange={(e) => onChange(e)}
              />
            </div>

            <div className="form-group social-input">
              <i className="fab fa-youtube fa-2x"></i>
              <input
                type="text"
                placeholder="YouTube URL"
                name="youtube"
                value={youtube}
                onChange={(e) => onChange(e)}
              />
            </div>

            <div className="form-group social-input">
              <i className="fab fa-linkedin fa-2x"></i>
              <input
                type="text"
                placeholder="Linkedin URL"
                name="linkedin"
                value={linkedin}
                onChange={(e) => onChange(e)}
              />
            </div>

            <div className="form-group social-input">
              <i className="fab fa-instagram fa-2x"></i>
              <input
                type="text"
                placeholder="Instagram URL"
                name="instagram"
                value={instagram}
                onChange={(e) => onChange(e)}
              />
            </div>
          </Fragment>
        )}

        <input type="submit" className="btn btn-primary my-1" />
        <Link className="btn btn-light my-1" to="/dashboard">
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
};

/*
const mapStateToProps = (state) => ({
  isAuthenticated,
});*/

export default connect(null, { createProfile })(withRouter(CreateProfile));
