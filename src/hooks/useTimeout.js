import {useEffect, useRef} from 'react'

function useTimeout(cb, delay) {
  const savedCb = useRef();

  useEffect(()=>{
    savedCb.current = cb;
  }, [cb])

  useEffect(()=>{
    
  }, [delay])
}

export default useTimeout