<?php

namespace App\Libraries\UserBuilder;

class Product
{
    private $product;

    public function __construct($model)
    {
        $this->product = $model;
    }

    public function setElement($name, $value)
    {
        $this->product->$name = $value;
    }

    public function getProduct()
    {
        return $this->product;
    }

    public function save()
    {
        return $this->product->save();
    }
}
