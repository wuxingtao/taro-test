/**
 * @Desc: useUtils
 * @Author: wu xingtgao
 * @Date: 2020/7/14
 */
import Taro, { useEffect, useCallback, useRef } from '@tarojs/taro'

/**
 * 防抖hook
 * @param fn 回调
 * @param delay 延迟时间
 * @param dep 关联依赖变更数组
 * @returns {f}
 */
export const useDebounce = (fn, delay, dep = []) => {
    const { current } = useRef({ fn, timer: null })
    useEffect(function () {
        current.fn = fn
    }, [current.fn, fn])

    return useCallback(function f (...args) {
        if (current.timer) {
            clearTimeout(current.timer)
        }
        current.timer = setTimeout(() => {
            current.fn.call(this, ...args)
        }, delay)
    }, [current.fn, current.timer, delay])
}
