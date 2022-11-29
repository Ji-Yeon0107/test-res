import Image from 'next/image';

import { Btn } from 'components/atoms/Button';
import Link from 'next/link';
export default function ErrorDisplay({ title, description }) {
    return (
        <div
            style={{
                width: 'fit-content',
                margin: 'auto',
                textAlign: 'center',
                marginTop: 100,
                marginBottom: 100,
            }}
        >
            <div style={{ marginBottom: 50 }}>
                <Image
                    src="/icons/gnb/logo-black.svg"
                    width={140}
                    height={62.5}
                />
            </div>
            <div
                style={{
                    marginBottom: 50,
                    fontWeight: 600,
                    fontSize: 30,
                }}
            >
                <div>{title?.line1}</div>
                <div>{title?.line2}</div>
            </div>
            <div
                style={{
                    marginBottom: 45,
                    fontWeight: 600,
                    fontSize: 20,
                    lineHeight: 1.5,
                }}
            >
                <div>{description?.line1}</div>
                <div>{description?.line2}</div>
                <div>{description?.line3}</div>
                <div>{description?.line4}</div>
            </div>
            <div>
                <Link href="/">
                    <Btn btnBlack width="314px" lh="60px">
                        홈으로 이동
                    </Btn>
                </Link>
            </div>
        </div>
    );
}
