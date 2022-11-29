import ErrorDisplay from 'components/views/ErrorDisplay';

function Error({ statusCode }) {
  return (
    <div>
      {/* <ErrorDisplay /> */}
      <ErrorDisplay
        title={{ line1: `${statusCode}_Not Found` }}
        description={{
          line1: '찾을 수 없는 페이지입니다.',
          line2:
            '요청하신 페이지가 존재하지 않거나, 잘못된 경로를 이용하셨어요 :)',
        }}
      />

      <ErrorDisplay title={{ line1: `${statusCode}_Method Not Allowed` }} />

      <ErrorDisplay
        title={{
          line1: '요청하신 페이지가',
          line2: '정상적으로 처리되지 않았습니다.',
        }}
        description={{
          line1: '불편을 드려서 죄송합니다.',
        }}
      />

      <ErrorDisplay
        title={{ line1: '서비스 접속대기 중입니다.' }}
        description={{
          line1: '현재 접속 사용자가 많아 대기중이며, 잠시만 기다리시면',
          line2: '서비스로 자동 접속됩니다.',
        }}
      />
      <ErrorDisplay
        title={{ line1: '홈페이지 서비스 준비중' }}
        description={{
          line1: '현재 홈페이지 오픈 준비중입니다.',
          line2: '빠른 시일 내에 서비스를 제공할 수 있도록 노력하겠습니다.',
          line3: '보다 많은 관심 부탁드립니다.',
          line4: '감사합니다.',
        }}
      />

      {(statusCode === 404 || statusCode === 405) && (
        <ErrorDisplay
          title={{ line1: `${statusCode}_Not Found` }}
          description={{
            line1: '찾을 수 없는 페이지입니다.',
            line2:
              '요청하신 페이지가 존재하지 않거나, 잘못된 경로를 이용하셨어요 :)',
          }}
        />
      )}

      {statusCode === 406 && (
        <ErrorDisplay title={{ line1: `${statusCode}_Method Not Allowed` }} />
      )}

      {!statusCode && (
        <ErrorDisplay
          title={{
            line1: '요청하신 페이지가',
            line2: '정상적으로 처리되지 않았습니다.',
          }}
          description={{
            line1: '불편을 드려서 죄송합니다.',
          }}
        />
      )}
    </div>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
