<?php

namespace App\Http\Controllers;
use App\Models\Category;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Http\Requests\CategoryRequest;


class CategoryController extends Controller
{
    public function GetCategories(): JsonResponse
    {
        $categories = Category::all();

        return response()->json([
            'categories' => $categories,
        ], 200);
    }
    public function CreateCategory(CategoryRequest  $request): JsonResponse
    {
        $validator = $request->validated();

        $category = Category::create([
            'name' => $request->name,
            'description' => $request->description,
        ]);

        return response()->json([
            'message' => 'Category created successfully',
            'category' => $category,
        ], 201);
    }
    public function UpdateCategory(CategoryRequest $request, $id): JsonResponse
    {
        $validator = $request->validated();

        $category = Category::find($id);

        if (!$category) {
            return response()->json(['message' => 'Category not found'], 404);
        }

        $category->update([
            'name' => $request->name,
            'description' => $request->description,
        ]);

        return response()->json([
            'message' => 'Category updated successfully',
            'category' => $category,
        ], 200);
    }

    public function DeleteCategory($id): JsonResponse
    {
        $category = Category::find($id);

        if (!$category) {
            return response()->json(['message' => 'Category not found'], 404);
        }

        $category->delete();

        return response()->json(['message' => 'Category deleted successfully'], 200);
    }
    
}
