

export interface BaseCardProps {
    children: React.ReactNode;
    title: string;
}

const BaseCard = (props: BaseCardProps) => {
    const { title, children } = props;

    return (
        <div className="card">
            <div className="card-header">
                <h3 className="card-header-title font-weight-bold">
                    {title}
                </h3>
            </div>
            <div className="card-body">
                {children}
            </div>
        </div>
    )
}

export default BaseCard;