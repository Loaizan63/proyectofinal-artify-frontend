export default function Modal({ titulo,info, modalID, type}) {
    if(type){
        return (
        <>
            <button type="button" className="btn rounded-full btn-primary" data-bs-toggle="modal" data-bs-target={`#${modalID}`} >
               ?
            </button>

            <div className="modal fade" id={modalID} tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        {/*<div className="modal-header">*/}
                        <div className=" d-flex justify-content-between align-items-center ps-5 pt-4 ">
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                            <div className="flex-grow-1 d-flex justify-content-center">
                                <h3 className="modal-title">{titulo}</h3>
                            </div>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col">
                                    <p>
                                        {info}
                                    </p>
                                </div>
                            </div>
                            <div className="text-center mb-2">
                                <button className="btn btn-primary btn-lg" data-bs-dismiss="modal">Cerrar</button>
                            </div>
                        </div>


                        {/*<div className="modal-footer">*/}

                    </div>
                </div>
            </div>

        </>
    )
    }else{
        return (
        <>
            <button type="button" className="btn rounded-full btn-primary" data-bs-toggle="modal" data-bs-target={`#${modalID}`} >
               confirm
            </button>

            <div className="modal fade" id={modalID} tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        {/*<div className="modal-header">*/}
                        <div className=" d-flex justify-content-between align-items-center ps-5 pt-4 ">
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                            <div className="flex-grow-1 d-flex justify-content-center">
                                <h3 className="modal-title">{titulo}</h3>
                            </div>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col">
                                    <p>
                                        {info}
                                    </p>
                                </div>
                            </div>
                            <div className="text-center mb-2">
                                <button className="btn btn-primary btn-lg" data-bs-dismiss="modal">Me extraña araña</button>
                            </div>
                        </div>


                        {/*<div className="modal-footer">*/}

                    </div>
                </div>
            </div>

        </>
    )
    }
    
}