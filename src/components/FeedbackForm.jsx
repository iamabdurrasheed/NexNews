import React, { useState } from 'react';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    rating: '5'
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        message: '',
        rating: '5'
      });
      setErrors({});
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error('Error submitting feedback:', error);
    } finally {
      setIsSubmitting(false);
    }
  };  if (isSubmitted) {
    return (
      <div className="container py-5 feedback-form">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8">
            <div className="card shadow-lg border-0">
              <div className="card-body text-center py-5">
                <div className="text-success mb-3">
                  <i className="fas fa-check-circle fa-3x"></i>
                </div>
                <h3 className="text-success mb-3">Thank You!</h3>
                <p className="text-muted mb-4">
                  Your feedback has been submitted successfully. We appreciate your input and will use it to improve NexNews.
                </p>
                <button 
                  className="btn btn-primary"
                  onClick={() => setIsSubmitted(false)}
                >
                  Submit Another Feedback
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }  return (
    <div className="container py-5 feedback-form  mx-auto">
      <div className="row justify-content-center">
        <div className="">
          <div className="card shadow-lg border-0"><div className="card-header bg-gradient text-white py-4" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
              <h4 className="mb-0 text-center">
                <i className="fas fa-comment-dots me-2"></i>
                Send Us Your Feedback
              </h4>
            </div>
            <div className="card-body p-5">
              <p className="text-muted mb-4">
                We'd love to hear your thoughts about NexNews. Your feedback helps us improve and provide better news experience.
              </p>
                <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="name" className="form-label fw-bold">
                      <i className="fas fa-user me-2 text-primary"></i>
                      Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className={`form-control form-control-lg ${errors.name ? 'is-invalid' : ''}`}
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                    />
                    {errors.name && (
                      <div className="invalid-feedback">
                        {errors.name}
                      </div>
                    )}
                  </div>

                  <div className="col-md-6 mb-3">
                    <label htmlFor="email" className="form-label fw-bold">
                      <i className="fas fa-envelope me-2 text-primary"></i>
                      Email <span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      className={`form-control form-control-lg ${errors.email ? 'is-invalid' : ''}`}
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email address"
                    />
                    {errors.email && (
                      <div className="invalid-feedback">
                        {errors.email}
                      </div>
                    )}
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="rating" className="form-label fw-bold">
                    <i className="fas fa-star me-2 text-warning"></i>
                    Overall Rating
                  </label>
                  <select
                    className="form-select form-select-lg"
                    id="rating"
                    name="rating"
                    value={formData.rating}
                    onChange={handleChange}
                  >
                    <option value="5">⭐⭐⭐⭐⭐ Excellent</option>
                    <option value="4">⭐⭐⭐⭐ Good</option>
                    <option value="3">⭐⭐⭐ Average</option>
                    <option value="2">⭐⭐ Poor</option>
                    <option value="1">⭐ Very Poor</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label htmlFor="message" className="form-label fw-bold">
                    <i className="fas fa-comment me-2 text-primary"></i>
                    Your Message <span className="text-danger">*</span>
                  </label>
                  <textarea
                    className={`form-control form-control-lg ${errors.message ? 'is-invalid' : ''}`}
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your experience with NexNews..."
                    style={{resize: 'vertical'}}
                  ></textarea>
                  {errors.message && (
                    <div className="invalid-feedback">
                      {errors.message}
                    </div>
                  )}
                  <div className="form-text">
                    <i className="fas fa-info-circle me-1"></i>
                    Minimum 10 characters required
                  </div>
                </div>

                <div className="d-grid gap-2">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg py-3"
                    disabled={isSubmitting}
                    style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', border: 'none'}}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-paper-plane me-2"></i>
                        Submit Feedback
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackForm;