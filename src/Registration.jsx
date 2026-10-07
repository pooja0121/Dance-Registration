import { useState } from "react";

function Registration({ onBack }) {

  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    gender: "",
    mobile: "",
    email: "",
    address: "",
    district: "",
    state: "",
    pincode: "",

    category: "",
    danceStyle: "",
    participationType: "",
    performanceTitle: "",
    songName: "",
    duration: "",

    guardianName: "",
    guardianMobile: "",

    groupName: "",
    participants: "",

    emergencyName: "",
    emergencyMobile: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Registration Data:", formData);

    setSubmitted(true);
  };

  // Confirmation page
  if (submitted) {
    return (
      <div className="confirmation-page">

        <div className="success-box">

          <div className="success-icon">✓</div>

          <h1>Registration Successful!</h1>

          <p>
            Thank you for registering for the State Level
            Dance Competition.
          </p>

          <div className="registration-id">
            Registration ID:
            <strong>
              DANCE2026-{Math.floor(1000 + Math.random() * 9000)}
            </strong>
          </div>

          <p className="confirmation-note">
            Please save your Registration ID for future
            communication.
          </p>

          <button
            className="submit-btn"
            onClick={onBack}
          >
            Back to Home
          </button>

        </div>

      </div>
    );
  }

  return (
    <div className="registration-page">

      {/* Header */}

      <div className="registration-header">

        <button
          className="back-btn"
          onClick={onBack}
        >
          ← Back to Home
        </button>

        <p className="section-label">
          STATE LEVEL DANCE COMPETITION
        </p>

        <h1>Participant Registration</h1>

        <p>
          Fill in the details below to register for the competition.
        </p>

      </div>


      <form
        className="registration-form"
        onSubmit={handleSubmit}
      >

       

        <section className="form-section">

          <div className="form-section-title">
            <span>01</span>
            <div>
              <h2>Participant Details</h2>
              <p>Enter your personal information</p>
            </div>
          </div>

          <div className="form-grid">

            <div className="form-group full-width">
              <label>Full Name *</label>

              <input
                type="text"
                name="fullName"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">

              <label>Date of Birth *</label>

              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
              />

            </div>

            <div className="form-group">

              <label>Gender *</label>

              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >

                <option value="">
                  Select Gender
                </option>

                <option value="Male">
                  Male
                </option>

                <option value="Female">
                  Female
                </option>

                <option value="Other">
                  Other
                </option>

              </select>

            </div>

            <div className="form-group">

              <label>Mobile Number *</label>

              <input
                type="tel"
                name="mobile"
                placeholder="10 digit mobile number"
                pattern="[0-9]{10}"
                value={formData.mobile}
                onChange={handleChange}
                required
              />

            </div>

            <div className="form-group">

              <label>Email Address *</label>

              <input
                type="email"
                name="email"
                placeholder="example@email.com"
                value={formData.email}
                onChange={handleChange}
                required
              />

            </div>

          </div>

          <div className="form-group">

            <label>Address *</label>

            <textarea
              name="address"
              placeholder="Enter your complete address"
              value={formData.address}
              onChange={handleChange}
              required
            />

          </div>

          <div className="form-grid">

            <div className="form-group">

              <label>District *</label>

              <input
                type="text"
                name="district"
                placeholder="Enter district"
                value={formData.district}
                onChange={handleChange}
                required
              />

            </div>

            <div className="form-group">

              <label>State *</label>

              <input
                type="text"
                name="state"
                placeholder="Enter state"
                value={formData.state}
                onChange={handleChange}
                required
              />

            </div>

            <div className="form-group">

              <label>Pincode *</label>

              <input
                type="text"
                name="pincode"
                placeholder="6 digit pincode"
                pattern="[0-9]{6}"
                value={formData.pincode}
                onChange={handleChange}
                required
              />

            </div>

          </div>

        </section>
        <section className="form-section">

          <div className="form-section-title">

            <span>02</span>

            <div>
              <h2>Competition Details</h2>
              <p>Select your category and performance details</p>
            </div>

          </div>

          <div className="form-grid">

            <div className="form-group">

              <label>Competition Category *</label>

              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              >

                <option value="">
                  Select Category
                </option>

                <option value="Kids">
                  Kids
                </option>

                <option value="Teenagers">
                  Teenagers
                </option>

                <option value="Under 35">
                  Under 35
                </option>

              </select>

            </div>


            <div className="form-group">

              <label>Dance Style *</label>

              <select
                name="danceStyle"
                value={formData.danceStyle}
                onChange={handleChange}
                required
              >

                <option value="">
                  Select Dance Style
                </option>

                <option value="Classical">
                  Classical
                </option>

                <option value="Folk">
                  Folk
                </option>

                <option value="Western">
                  Western
                </option>

                <option value="Hip Hop">
                  Hip Hop
                </option>

                <option value="Contemporary">
                  Contemporary
                </option>

                <option value="Bollywood">
                  Bollywood
                </option>

                <option value="Freestyle">
                  Freestyle
                </option>

                <option value="Other">
                  Other
                </option>

              </select>

            </div>


            <div className="form-group">

              <label>Participation Type *</label>

              <select
                name="participationType"
                value={formData.participationType}
                onChange={handleChange}
                required
              >

                <option value="">
                  Select Type
                </option>

                <option value="Solo">
                  Solo
                </option>

                <option value="Duo">
                  Duo
                </option>

                <option value="Group">
                  Group
                </option>

              </select>

            </div>


            <div className="form-group">

              <label>Performance Duration *</label>

              <input
                type="text"
                name="duration"
                placeholder="Example: 5 minutes"
                value={formData.duration}
                onChange={handleChange}
                required
              />

            </div>

          </div>


          <div className="form-group">

            <label>Performance Title *</label>

            <input
              type="text"
              name="performanceTitle"
              placeholder="Enter your performance title"
              value={formData.performanceTitle}
              onChange={handleChange}
              required
            />

          </div>


          <div className="form-group">

            <label>Song / Music Name *</label>

            <input
              type="text"
              name="songName"
              placeholder="Enter song or music name"
              value={formData.songName}
              onChange={handleChange}
              required
            />

          </div>

        </section>


        <section className="form-section">

          <div className="form-section-title">

            <span>03</span>

            <div>
              <h2>Parent / Guardian Details</h2>
              <p>Required for Kids and Teenager participants</p>
            </div>

          </div>

          <div className="form-grid">

            <div className="form-group">

              <label>Guardian Name</label>

              <input
                type="text"
                name="guardianName"
                placeholder="Parent / Guardian name"
                value={formData.guardianName}
                onChange={handleChange}
              />

            </div>

            <div className="form-group">

              <label>Guardian Mobile Number</label>

              <input
                type="tel"
                name="guardianMobile"
                placeholder="Guardian mobile number"
                value={formData.guardianMobile}
                onChange={handleChange}
              />

            </div>

          </div>

        </section>


       

        <section className="form-section">

          <div className="form-section-title">

            <span>04</span>

            <div>
              <h2>Group Details</h2>
              <p>Fill this section if participating as a group</p>
            </div>

          </div>

          <div className="form-grid">

            <div className="form-group">

              <label>Group Name</label>

              <input
                type="text"
                name="groupName"
                placeholder="Enter group name"
                value={formData.groupName}
                onChange={handleChange}
              />

            </div>

            <div className="form-group">

              <label>Number of Participants</label>

              <input
                type="number"
                name="participants"
                min="2"
                placeholder="Number of participants"
                value={formData.participants}
                onChange={handleChange}
              />

            </div>

          </div>

        </section>

        <section className="form-section">

          <div className="form-section-title">

            <span>05</span>

            <div>
              <h2>Emergency Contact</h2>
              <p>Contact person in case of emergency</p>
            </div>

          </div>

          <div className="form-grid">

            <div className="form-group">

              <label>Contact Name *</label>

              <input
                type="text"
                name="emergencyName"
                placeholder="Emergency contact name"
                value={formData.emergencyName}
                onChange={handleChange}
                required
              />

            </div>

            <div className="form-group">

              <label>Contact Mobile *</label>

              <input
                type="tel"
                name="emergencyMobile"
                placeholder="Emergency contact number"
                value={formData.emergencyMobile}
                onChange={handleChange}
                required
              />

            </div>

          </div>

        </section>


        <section className="form-section">

          <div className="form-section-title">

            <span>06</span>

            <div>
              <h2>Declaration</h2>
              <p>Please confirm before submitting</p>
            </div>

          </div>

          <div className="declaration">

            <input
              type="checkbox"
              id="declaration"
              required
            />

            <label htmlFor="declaration">

              I confirm that all the information provided in this
              registration form is true and correct. I agree to
              follow the rules and regulations of the State Level
              Dance Competition.

            </label>

          </div>

        </section>


        <button
          type="submit"
          className="registration-submit"
        >
          Submit Registration →
        </button>

      </form>

    </div>
  );
}

export default Registration;