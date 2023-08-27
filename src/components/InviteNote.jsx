import React from "react";
import "../styles/InviteNote.css";

function InviteNote() {
    return (
        <section id="invite-note">
            <div className="invite-note-wrapper">
                <h5>An Invitation from:</h5>
                <h2>Mr. & Mrs. KSA Amanullah Ashrafi</h2>

                <h5 className="address mb-3">
                    Proprietor: KSA Gold Smith,
                    <br /> Adoni.
                </h5>
                <h5 className="address mb-3">
                    Residence: #24/11, Havanapet,
                    <br /> Adoni, Kurnool Dist.,
                    <br /> AP - 518 301.
                </h5>
                <p className="address">
                    Contact: <br />
                    +91 99598 44181, <br />
                    +91 91330 75136.
                </p>
            </div>
        </section>
    );
}

export default InviteNote;
