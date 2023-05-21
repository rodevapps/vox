<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;


class HomeController extends AbstractController
{
    /**
    * @Route("/", name="home", methods={"GET"})
    * @Route("/api", name="api_home", methods={"GET"})
    * @Route("/api/images", name="images_index", methods={"GET"})
    */
    public function index(): Response
    {
        $images = [
            [
                "https://picsum.photos/id/564/1200/800",
                "https://picsum.photos/id/565/1200/800",
                "https://picsum.photos/id/566/1200/800",
                "https://picsum.photos/id/567/1200/800",
                "https://picsum.photos/id/568/1200/800",
                "https://picsum.photos/id/569/1200/800"
            ], [
                "https://picsum.photos/id/570/1200/800",
                "https://picsum.photos/id/571/1200/800",
                "https://picsum.photos/id/572/1200/800",
                "https://picsum.photos/id/573/1200/800",
                "https://picsum.photos/id/574/1200/800",
                "https://picsum.photos/id/575/1200/800"
            ], [
                "https://picsum.photos/id/576/1200/800",
                "https://picsum.photos/id/577/1200/800",
                "https://picsum.photos/id/582/1200/800",
                "https://picsum.photos/id/579/1200/800",
                "https://picsum.photos/id/580/1200/800",
                "https://picsum.photos/id/581/1200/800"
            ]
        ];

        return $this->json($images);
    }
}
