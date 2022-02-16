import React from 'react';
import { useParkingSpace, useParking } from './ParkingContext';
import { Form, Select, Button } from 'antd';
const { Option } = Select;

function ParkingEntry() {
  //   const [form] = Form.useForm();
  const parkingAreas = useParking();
  const park = useParkingSpace();

  const parkCar = (values) => {
    if (values.entrance === '1') {
      for (const parkingArea of parkingAreas) {
        switch (values.car) {
          case 'small': {
            if (!parkingArea.filled) {
              park(parkingArea.key);
              return;
            }
          }
        }
      }
    }
  };

  return (
    <div className='parking-lot__controls'>
      <Form
        className='car-form'
        name='car-form'
        layout='horizontal'
        autoComplete='off'
        onFinish={parkCar}
      >
        <Form.Item label='Select a Car' name='car' initialValue='small'>
          <Select>
            <Option value='small'> Small Car </Option>
            <Option value='mid'> Medium-sized Car </Option>
            <Option value='large'> Large Car </Option>
          </Select>
        </Form.Item>

        <Form.Item
          label='Select Parking Entrance'
          name='entrance'
          initialValue='1'
        >
          <Select>
            <Option value='1'> 1 </Option>
            <Option value='2'> 2 </Option>
            <Option value='3'> 3 </Option>
          </Select>
        </Form.Item>

        <Form.Item>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default ParkingEntry;
