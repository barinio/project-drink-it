import React, { useState } from "react";
import { TeamModalButtonWrapper } from "./TeamModalButton.styled";
import TeamModal from "components/TeamModal/TeamModal";

const TeamModalButton = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };
    return (
        <TeamModalButtonWrapper>
            <button className="team-modal-btn" onClick={openModal}>Created by</button>
            {isModalOpen && <TeamModal onClose={() => setIsModalOpen(false)} />}
        </TeamModalButtonWrapper>
    )
}

export default TeamModalButton;