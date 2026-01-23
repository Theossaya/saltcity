"use client";

import { useMemo, useState } from "react";

type Leader = {
  key: string;
  name: string;
  title: string;
  image: string;
  button: string;
  modalTitle: string;
  modalBody: string;
};

export default function LeadershipGrid() {
  const leaders = useMemo<Leader[]>(
    () => [
      {
        key: "tobore",
        name: "Pastor Tobore David",
        title: "Senior Pastor",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
        button: "About",
        modalTitle: "Pastor Tobore David",
        modalBody: "Pastor Tobore David is the Senior Pastor of SaltCity Church. With a passionate heart for discipleship and transformation, he leads the congregation in becoming mighty men and women of God through the power of His Word. His vision is to raise disciples who become disciple makers, impacting families, communities, and nations.",
      },
      {
        key: "seun",
        name: "Pastor Seun Tobore David",
        title: "Pastor, Family Life",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
        button: "About",
        modalTitle: "Pastor Seun Tobore David",
        modalBody: "Pastor Seun oversees Family Life ministry at SaltCity, helping families build strong foundations rooted in biblical principles. Her passion is to see families thrive in God's love and truth, creating homes that reflect Christ's presence.",
      },
      {
        key: "edison",
        name: "Pastor Edison Iboyi",
        title: "Pastor, Cityzens PTI",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
        button: "About",
        modalTitle: "Pastor Edison Iboyi",
        modalBody: "Pastor Edison leads Cityzens PTI, raising up disciples who are equipped to make a lasting impact. His focus is on intentional discipleship and developing leaders who will carry the gospel forward with conviction and power.",
      },
      {
        key: "rachel",
        name: "Pastor Rachel Adesi",
        title: "Resident Pastor",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
        button: "About",
        modalTitle: "Pastor Rachel Adesi",
        modalBody: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        key: "othuke",
        name: "Pastor Othuke Adesi",
        title: "Resident Pastor",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
        button: "About",
        modalTitle: "Pastor Othuke Adesi",
        modalBody: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      
      {
        key: "victor",
        name: "Pastor Victor Samuel",
        title: "Pastor, CityCenter",
        image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=400&q=80",
        button: "About",
        modalTitle: "Pastor Victor Samuel",
        modalBody: "Pastor Victor serves as the pastor of CityCenter, guiding teenagers in discovering their identity in Christ. His heart is to see young people live purposefully, grounded in faith and ready to impact their generation.",
      },
     {
        key: "mercy",
        name: "Pastor Mercy Chuks",
        title: "Pastor",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
        button: "About",
        modalTitle: "Pastor Mercy Chuks",
        modalBody: "Pastor Mercy leads LifeCity ministry, empowering young adults to walk in faith and fulfill their God-given purpose. His passion is to see this generation rise up as mighty men and women who know their identity in Christ.",
      },
      {
        key: "axcel",
        name: "Pastor Axcel Chuks",
        title: "Pastor, LifeCity",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
        button: "About",
        modalTitle: "Pastor Axcel Chuks",
        modalBody: "Pastor Axcel leads LifeCity ministry, empowering young adults to walk in faith and fulfill their God-given purpose. His passion is to see this generation rise up as mighty men and women who know their identity in Christ.",
      },
         {
        key: "sam",
        name: "Pastor Sam Igurube",
        title: "Pastor",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
        button: "About",
        modalTitle: "Pastor Sam Igurube",
        modalBody: "Pastor Axcel leads LifeCity ministry, empowering young adults to walk in faith and fulfill their God-given purpose. His passion is to see this generation rise up as mighty men and women who know their identity in Christ.",
      },
      {
        key: "brave",
        name: "Pastor Brave Iyomih",
        title: "Pastor, LifeCity",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
        button: "About",
        modalTitle: "Pastor Sam Iyomih",
        modalBody: "Pastor Axcel leads LifeCity ministry, empowering young adults to walk in faith and fulfill their God-given purpose. His passion is to see this generation rise up as mighty men and women who know their identity in Christ.",
      },
    ],
    []
  );

  const [openKey, setOpenKey] = useState<string | null>(null);
  const active = leaders.find((l) => l.key === openKey) || null;

  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-full max-w-[1200px] px-6 pb-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {leaders.map((l) => (
            <div key={l.key} className="group">
              <div className="relative overflow-hidden rounded-2xl mb-4 shadow-[0_8px_24px_rgba(0,0,0,0.12)] group-hover:shadow-[0_12px_32px_rgba(0,0,0,0.16)] transition-all duration-300">
                <div className="aspect-square bg-neutral-200">
                  <img
                    src={l.image}
                    alt={`${l.name} - ${l.title}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              <div className="text-center">
                <div className="text-xl font-bold mb-1">{l.name}</div>
                <div className="text-sm text-black/60 mb-4">{l.title}</div>

                <button
                  onClick={() => setOpenKey(l.key)}
                  className="text-sm font-semibold px-6 py-2.5 rounded-lg bg-black/5 hover:bg-black/10 transition-colors"
                  type="button"
                >
                  {l.button}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {active ? (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center px-6 bg-black/60"
            role="dialog"
            aria-modal="true"
            onClick={() => setOpenKey(null)}
          >
            <div 
              className="relative w-full max-w-2xl rounded-2xl bg-white shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute right-4 top-4 h-10 w-10 rounded-full bg-black/10 hover:bg-black/20 flex items-center justify-center transition-colors"
                onClick={() => setOpenKey(null)}
                type="button"
                aria-label="Close"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12"/>
                </svg>
              </button>

              <div className="p-8">
                <h3 className="text-3xl font-black mb-2">{active.modalTitle}</h3>
                <p className="text-sm text-black/60 mb-6 font-semibold">
                  {leaders.find(l => l.key === active.key)?.title}
                </p>
                <p className="text-base leading-relaxed text-black/70">
                  {active.modalBody}
                </p>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}