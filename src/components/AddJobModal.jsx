import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

const AddJobModal = ({ show, onHide }) => {
  const [formData, setFormData] = useState({
    jobRole: '',
    reqId: '',
    country: '',
    location: '',
    date: ''
  });

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="md"
      centered
      contentClassName="border-0"
    >
      <Modal.Header className="border-0 pb-0">
        <Modal.Title className="text-2xl font-normal">Add Job Role</Modal.Title>
      </Modal.Header>

      <Modal.Body className="">
        <Form>
          <Form.Group className="mb-2">
            <Form.Label className="text-lg mb-2">Job Role</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Job Role Name"
              className="py-3 px-4 border rounded-lg text-gray-500"
              value={formData.jobRole}
              onChange={(e) => setFormData({ ...formData, jobRole: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label className="text-lg mb-2">Req ID</Form.Label>
            <Form.Control
              type="text"
              className="py-3 px-4 border rounded-lg"
              value={formData.reqId}
              onChange={(e) => setFormData({ ...formData, reqId: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label className="text-lg mb-2">Country</Form.Label>
            <Form.Select 
              className="py-3 px-4 border rounded-lg text-gray-500"
              value={formData.country}
              onChange={(e) => setFormData({ ...formData, country: e.target.value })}
            >
              <option value="">Select Location</option>
              <option value="Qatar">Qatar</option>
              {/* Add more countries as needed */}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label className=" mb-2">Location</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Location"
              className="py-3 px-4 border rounded text-gray-500"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label className=" mb-2">Date</Form.Label>
            <Form.Control
              type="text"
              placeholder="DD/MM/YY"
              className="py-3 px-4 border rounded text-gray-500"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            />
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer className="border-0 px-4 pb-4">
        <Button
          variant="light"
          onClick={onHide}
          className="px-8 py-2 rounded mr-3 font-normal"
          style={{ backgroundColor: '#fff', border: '1px solid #e2e8f0' }}
        >
          Cancel
        </Button>
        <Button
          variant="success"
          className="px-8 py-2 rounded font-normal"
          style={{ backgroundColor: '#10b981', border: 'none' }}
        >
          Add Job
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddJobModal;


