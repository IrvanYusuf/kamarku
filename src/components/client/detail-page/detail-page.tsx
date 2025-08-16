"use client";
import { useState, useEffect } from "react";
import ImageDetail from "./image-detail";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ButtonGradient from "@/components/button-gradient";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { facilitiesData } from "@/lib/dummy-data";
import { toast } from "sonner";

interface DetailPageProps {
  roomId: string;
}

// Data harga yang dinamis
const pricingData = [
  { value: "1-jam", label: "1 Jam", price: 50000 },
  { value: "6-jam", label: "6 Jam", price: 100000 },
  { value: "1-hari", label: "1 Hari", price: 150000 },
  { value: "3-hari", label: "3 Hari", price: 400000 },
  { value: "1-minggu", label: "1 Minggu", price: 900000 },
  { value: "2-minggu", label: "2 Minggu", price: 1500000 },
  { value: "1-bulan", label: "1 Bulan", price: 2500000 },
];

const DetailPage = ({ roomId }: DetailPageProps) => {
  // State untuk menyimpan durasi dan harga yang dipilih
  const [selectedDuration, setSelectedDuration] = useState(
    pricingData[0].value
  );
  const [currentPrice, setCurrentPrice] = useState(pricingData[0].price);

  // useEffect untuk mengubah harga setiap kali durasi berubah
  useEffect(() => {
    const selected = pricingData.find(
      (item) => item.value === selectedDuration
    );
    if (selected) {
      setCurrentPrice(selected.price);
    }
  }, [selectedDuration]);

  // Fungsi untuk memformat harga ke dalam Rupiah
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleBooking = () => {
    toast.success("Berhasil booking (just simulation)");
  };

  return (
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Kiri */}
        <div className="lg:col-span-2">
          <ImageDetail />
          <div className="mt-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Kamar AC</h2>
          </div>
          <div className="mt-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Fasilitas</h3>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
              {facilitiesData.map((facility, index) => {
                const Icon = facility.icon;
                return (
                  <div
                    className="flex items-center space-x-2 font-medium text-gray-600"
                    key={index}
                  >
                    <Icon />
                    <span className="text-sm lg:text-lg">{facility.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mt-10 w-full">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Lokasi</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.8124258423045!2d109.39637467496456!3d-0.09848829990053906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e1d5108f5065b7b%3A0x3c62191d72ef5e44!2sPerumahan%20BTN%20Teluk%20Mulus!5e0!3m2!1sid!2sid!4v1755375308994!5m2!1sid!2sid"
              height="450"
              className="w-full"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Kanan */}
        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <Card>
              <CardHeader>
                <CardTitle>Pesan Kamar</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="mb-4">
                    <Select
                      onValueChange={setSelectedDuration}
                      defaultValue={selectedDuration}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Pilih Durasi" />
                      </SelectTrigger>
                      <SelectContent>
                        {pricingData.map((item) => (
                          <SelectItem key={item.value} value={item.value}>
                            {item.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <span className="text-3xl font-bold text-gray-900">
                    {formatPrice(currentPrice)}
                  </span>
                  <span className="text-gray-500 ml-1 text-md font-medium">
                    {selectedDuration.includes("bulan") ? "/ bulan" : "/ sewa"}
                  </span>
                </div>
                <ButtonGradient
                  onClick={handleBooking}
                  className="py-6 cursor-pointer w-full"
                >
                  Pesan Sekarang
                </ButtonGradient>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
