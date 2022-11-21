import tapzero from 'tapzero'
const { test } = tapzero
import testContext from '@nichoth/tap-ssc/index.mjs'

testContext(tapzero, { headless: true })

test('browser environment', t => {
    t.ok(window, 'window should exist')
})
