"use client";
import CityPicker from "@/components/CityPicker";
import { Card, Divider, Subtitle, Text } from "@tremor/react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#394F68] to-[#183B7B] p-10 flex flex-col justify-center">
      <Card className="!bg-white">
        <Text className="text-6xl font-bold text-center mb-10">
          Weather App
        </Text>
        <Subtitle className="text-xl text-center">
          Powere by OpenAI, Next.js 13.5, Tilwind CSS, Tremor 2.0 + More!
        </Subtitle>

        <Divider className="my-10" />
        <Card className="bg-gradient-to-br from-[#394F68] to-[#183B7B]">
          <CityPicker />
        </Card>
      </Card>
    </div>
  );
}
