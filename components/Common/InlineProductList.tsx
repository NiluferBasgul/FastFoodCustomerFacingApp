import ImageLoad from "components/Utils/ImageLoad";
import compressedImages from "compressedImages";
import cucinaTree, { FoodSlug, MenuCategoryType } from "data/cucinaTree";


const InlineProductList = () => {

    const pizzas = cucinaTree.mainMenu[MenuCategoryType.PIZZAS];

    const modalRenderer = () => <>
        <div className="modal fade show" id="modalMembers" tabIndex={-1} role="dialog" aria-modal="true" style={{ display: 'block' }}>
            <div className="modal-dialog modal-dialog-vertical" role="document">
                <div className="modal-content">
                    <div className="modal-body" data-list="{&quot;valueNames&quot;: [&quot;name&quot;]}">
                        {/* Form */}
                        <form className="mb-4">
                            <div className="input-group input-group-merge input-group-rounded input-group-reverse">
                                <input className="form-control list-search" type="search" placeholder="Search" />
                                <div className="input-group-text">
                                    <span className="fe fe-search" />
                                </div>
                            </div>
                        </form>
                        {/* List group */}
                        <div className="my-n3">
                            <div className="list-group list-group-flush list-group-focus list">
                                <a className="list-group-item" href="../profile-posts.html">
                                    <div className="row align-items-center">
                                        <div className="col-auto">
                                            {/* Avatar */}
                                            <div className="avatar">
                                                <img src="../assets/img/avatars/profiles/avatar-2.jpg" alt="..." className="avatar-img rounded-circle" />
                                            </div>
                                        </div>
                                        <div className="col ms-n2">
                                            {/* Title */}
                                            <h4 className="text-body text-focus mb-1 name">
                                                Ab Hadley
                                         </h4>
                                            {/* Status */}
                                            <p className="text-body small mb-0">
                                                <span className="text-danger">●</span> Offline
                                        </p>
                                        </div>
                                    </div> {/* / .row */}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>

    return <>
        {
            modalRenderer()
            // Object.entries(pizzas).map(([slug, details]) => {
            //     return <div className='d-flex justify-content-space-between'>
            //         <img
            //             src={compressedImages[details?.imgSrc || `./public/images/menu/${details?.menuCategory || MenuCategoryType.PIZZAS}/${slug}.jpg`]}
            //             alt={slug}
            //         />
            //         <div>
            //             {details?.name}
            //         </div>
            //     </div>
            // })
        }
    </>
}

export default InlineProductList;