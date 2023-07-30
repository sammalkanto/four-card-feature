import supervisorIcon from '../assets/icon-supervisor.svg';
import teamBuilderIcon from '../assets/icon-team-builder.svg';
import karmaIcon from '../assets/icon-karma.svg';
import calculatorIcon from '../assets/icon-calculator.svg';

type BorderColor = 'red' | 'cyan' | 'orange' | 'blue';
interface FeatureCardProps {
    title: string;
    description: string;
    icon: string;
    border: BorderColor;
}

const FeatureCard = ({ title, description, icon, border }: FeatureCardProps) => {
    return(
        <div className='card'>
            <div className={`border ${border}`}/>
            <div className='content'>
                <div className='box'>
                    <h2 className='title'>{title}</h2>
                    <p className='description'>{description}</p>
                </div>
                <div className='icon'>
                    <img src={icon}/>
                </div>
            </div>
        </div>
    )
}

const FourCardFeature = () => {
    return(
        <div className='main'>
            <div className='info'>
                <div className='titles'>
                    <h1 className='title'>Reliable, efficient delivery</h1>
                    <h1 className='title'>Powered by Technology</h1>
                </div>
                <p className='description'>Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful</p>
            </div>
            <div className='features'>
                <div className='column'>
                    <FeatureCard
                        title='Supervisor'
                        description='Monitors activity to identify project roadblocks'
                        icon={supervisorIcon}
                        border='cyan'
                    />
                </div>
                <div className='column'>
                    <FeatureCard
                        title='Team Builder'
                        description='Scans our talent network to create the optimal team for your project'
                        icon={teamBuilderIcon}
                        border='red'
                    />
                    <FeatureCard
                        title='Karma'
                        description='Regularly evaluates our talent to ensure quality'
                        icon={karmaIcon}
                        border='orange'
                    />
                </div>
                <div className='column'>
                    <FeatureCard
                        title='Calculator'
                        description='Uses data from past projects to provide better delivery estimates'
                        icon={calculatorIcon}
                        border='blue'
                    />
                </div>
            </div>
        </div>
    )
}

export default FourCardFeature;