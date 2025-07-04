import React, { useState } from "react";
import "./Contact.css";

function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Message sent!");
        setForm({ name: "", email: "", subject: "", message: "" });
    };

    return (
        <section className="vh-100 gradient-custom">
            <div className="container py-5 h-100">
                <div className="row justify-content-center align-items-center h-100">
                    <div className="col-12 col-lg-9 col-xl-7">
                        <div className="card card-registration">
                            <div className="card-body">
                                <h3>Contact Us</h3>
                                <form onSubmit={handleSubmit} autoComplete="off">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-outline">
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    className="form-control"
                                                    value={form.name}
                                                    onChange={handleChange}
                                                    required
                                                />
                                                <label className="form-label" htmlFor="name">Your Name</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-outline">
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    className="form-control"
                                                    value={form.email}
                                                    onChange={handleChange}
                                                    required
                                                />
                                                <label className="form-label" htmlFor="email">Your Email</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-outline">
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            className="form-control"
                                            value={form.subject}
                                            onChange={handleChange}
                                            required
                                        />
                                        <label className="form-label" htmlFor="subject">Subject</label>
                                    </div>
                                    <div className="form-outline">
                                        <textarea
                                            id="message"
                                            name="message"
                                            className="form-control"
                                            rows="4"
                                            value={form.message}
                                            onChange={handleChange}
                                            required
                                        />
                                        <label className="form-label" htmlFor="message">Message</label>
                                    </div>
                                    <button className="btn btn-primary" type="submit">
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// export default Contact;
//                 </div>
//             </div>
//         </section>
//     );
// }

export default Contact;
// 