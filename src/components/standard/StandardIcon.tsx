import React, {ReactElement, useContext} from "react";
import { SimpleSize, SimpleSizeOrNumber, isSimpleSize } from "../utilities/simpleSize";
import iconList from '../../assets/images/icons/icons.json';
import { ThemeContext } from "../providers/themeProvider";

export interface StandardIconProps {
    id: string;
    size?: SimpleSizeOrNumber;
    fillColor?: string | undefined;
    strokeColor?: string;
    strokeWidth?: number;
    animation?: StandardIconAnimation;
    style?: React.CSSProperties;
    className?: string;
}

export interface StandardIconParamSet {
    id: string;
    path: string;
    width: number;
    height: number;
    origin: {
        originalName: string | null;
        familyName: string | null;
        familyUrl: string | null;
        license: string | null;
        notes: string | null;
    } | null;
}

export interface StandardIconAnimation {
    attributeType?: string;
    attributeName?: string;
    from?: string;
    to?: string;
    begin?: string;
    dur?: string;
    values?: string;
    keyTimes?: string;
    repeatCount?: string;
}

export type IconSizes = {
    [key in SimpleSize]: number;
};

const defaultIconSizes:IconSizes = {
    'XS': 17,
    'S': 23,
    'M': 30,
    'L': 40,
    'XL': 50,
    'XXL': 60,
}

const iconNotFound: StandardIconParamSet = {
    origin: null,
    id: 'iconNotFound-54321',
    path: 'M 0 0 L 1024 0 L 1024 1024 L 0 1024 L 0 0 z',
    width: 1024,
    height: 1024
};

function iconParamSetFromId(id:string): StandardIconParamSet {
    const first = iconList.iconList.find(el => el.id === id);
    if (first) {
        return first;
    }
    return iconNotFound;
}


export default function StandardIcon(props: StandardIconProps): ReactElement {

    const {theme} = useContext(ThemeContext);
    
    const iconParamSet: StandardIconParamSet = iconParamSetFromId(props.id);
    const pathData: string = iconParamSet.path;
    const className:string = props.className ? '-' + props.className : '';

    const animation: StandardIconAnimation | undefined = props.animation;

    const style: React.CSSProperties | undefined = props.style;
    const svgStyle: React.CSSProperties = {
        //Custom svg style
        margin: 'auto',
        //overriding
        ...style
    };
    
    const size: number = props.size ? (isSimpleSize(props.size) ? defaultIconSizes[props.size] : props.size) : defaultIconSizes['M'];

    const fillColor: string = props.fillColor ?? ((theme === 'light') ? '#000' : '#fff');
    const strokeColor: string = props.strokeColor ?? ((theme === 'light') ? '#000' : '#fff');
    let strokeWidth: number = props.strokeWidth ?? 0;

    if (style?.strokeWidth && typeof style?.strokeWidth === 'number') {
        strokeWidth = style?.strokeWidth as number;
    }
    strokeWidth = strokeWidth * (iconParamSet.width / size);

    const viewBoxTop: number = -strokeWidth/2;
    const viewBoxLeft: number = -strokeWidth/2;
    const viewBoxRight: number = iconParamSet.width + strokeWidth;
    const viewBoxBottom: number = iconParamSet.height + strokeWidth;

    //console.log ( size, viewBoxTop, viewBoxLeft, viewBoxRight, viewBoxBottom, iconParamSet.width, iconParamSet.height)
    //console.log(size)
    return (
        // <div className={styles.iconContainer} style={{width:size, height:size}}>
            <svg 
                className={'StandardIcon'+className}
                style={svgStyle}
                width={size}
                height={size}
                fill={fillColor}
                stroke={strokeColor}
                strokeWidth={strokeWidth}
                viewBox={`${viewBoxLeft} ${viewBoxTop} ${viewBoxRight / 2} ${viewBoxBottom / 2}`}
                xmlns='http://www.w3.org/2000/svg'
            >
                <path d={pathData} fillRule='evenodd' clipRule='evenodd'> {/*fillRule='evenodd' clipRule='evenodd'*/}
                    {
                        animation ? (
                            <animate 
                                attributeType={animation?.attributeType}
                                attributeName={animation?.attributeName}
                                from={animation?.from}
                                to={animation?.to}
                                dur={animation?.dur}
                                values={animation?.values}
                                keyTimes={animation?.keyTimes}
                                repeatCount={animation?.repeatCount}
                            />
                        ) : (<></>)
                    }
                </path>
            </svg>
        // </div>
    );
}