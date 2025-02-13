import React from 'react'
import Layout from './../Template/Layout';

const NotFound = () => {
  return (
    <Layout>
        <h1 className="text-center font-bold text-3xl">
            ไม่พบหน้าที่ต้องการ
        </h1>
        <p className="text-center">กรุณาลองอีกครั้ง</p>
    </Layout>
  )
}

export default NotFound