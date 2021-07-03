import React from "react";
import { Menu, Input, Dropdown, Label,Button } from "semantic-ui-react";

export default function Sidebar() {
  let city = [
    { key: 34, value: 34, text: "İstanbul" },
    { key: 81, value: 81, text: "Düzce" },
    { key: 71, value: 61, text: "Kırıkkale" },
  ];
  let department = [
    { key: 1, value: 1, text: "Software Developer" },
    { key: 2, value: 2, text: "Graphic Designer" },
    { key: 3, value: 3, text: "Android Developer" },
  ];
  return (
    <Menu vertical>
      <Menu.Item>
        <Input size="mini" type="number" placeholder="Min Salary">
          <Label basic>₺</Label>
          <input />
        </Input>
      </Menu.Item>
      <Menu.Item>
        <Input size="mini" type="number" placeholder="Max Salary">
          <Label basic>₺</Label>
          <input />
        </Input>
      </Menu.Item>
      <Menu.Item>
        <Dropdown
          placeholder="Şehir"
          fluid
          multiple
          search
          selection
          options={city}
        />
      </Menu.Item>
      <Menu.Item>
        <Dropdown
          placeholder="Sektör/Departman"
          fluid
          multiple
          search
          selection
          options={department}
        />
      </Menu.Item>
      <Menu.Item>
      <Button basic color='blue' content='Ara!' fluid />
      </Menu.Item>
    </Menu>
  );
}
