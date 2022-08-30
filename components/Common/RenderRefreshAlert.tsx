import useTranslation from "next-translate/useTranslation";

const RenderRefreshAlert = () => {

    const { t } = useTranslation('common')

    return <div className="alert alert-warning fade show h4 d-flex justify-content-around align-items-center m-0 rounded-0 border-0 py-3" role="alert">
        <strong>{t`somethingWentWrong`} &nbsp;</strong> <span className='btn btn-light' onClick={() => location.reload()}>{t`tryToRefreshThePage`}</span>
    </div>
}

export default RenderRefreshAlert;