
export const ModalWindowSity = ({ setModal, setSityId, sity }) => {
    const handleModal = (id) => {
        setSityId(id)
        setModal(false)
    }
    return (
        <div className="ModalWindowSity" onClick={() => setModal(false)}>
            <div onClick={(e) => e.stopPropagation()} className="ModalWindowSity_content">
                {sity.map((el, id) => (
                    <button onClick={() => handleModal(id)} key={id}>
                        {el}
                    </button>
                ))}
            </div>
        </div>
    )
}
